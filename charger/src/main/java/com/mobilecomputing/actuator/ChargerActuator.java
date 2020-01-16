package com.mobilecomputing.actuator;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.stream.JsonReader;
import com.mobilecomputing.actuator.Entities.Charger;
import com.mobilecomputing.actuator.Entities.Environment;
import org.eclipse.californium.core.CoapClient;
import org.eclipse.californium.core.CoapHandler;
import org.eclipse.californium.core.CoapObserveRelation;
import org.eclipse.californium.core.CoapResponse;

import java.io.*;

public class ChargerActuator {
    public static Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public static void main(String[] args) throws InterruptedException, IOException {
        final Charger charger = new Charger();
        CoapClient client = new CoapClient("coap://localhost/charger");
        File file = new File("E:\\JavaSpring\\environment.json");
        if (!file.exists()) {
            file.createNewFile();
        }
        if (file.length() <= 0) {
            BufferedWriter bf = new BufferedWriter(new FileWriter(file));
            bf.write(gson.toJson(new Environment()));
            bf.close();
        }
        CoapObserveRelation relation = client.observe(new CoapHandler() {
            public void onLoad(CoapResponse coapResponse) {
                if (coapResponse != null) {
                    CopyFromJsonString(charger, coapResponse.getResponseText());
                }
            }

            public void onError() {
                System.out.println("no response");
            }
        });
        DataInputStream dis = new DataInputStream(System.in);

        float oldChargePower = 0;
        while (dis.available() == 0) {
            Thread.sleep(1000);
            JsonReader jreader = new JsonReader(new FileReader(file));
            Environment env = gson.fromJson(jreader, Environment.class);
            if (env == null) {
                Thread.sleep(100);
                continue;
            }
            float realChargePower = (float) charger.ChargePowerPercentage / 100 * charger.ChargeCurrent * charger.ChargeVoltage;
            if (charger.ChargerIsOn) {
                if (!charger.PreviousState) {
                    env.PowerConsumption.DevicePower.put("charger", (int) realChargePower);
                    env.PowerConsumption.CalculateCurrentPowerConsumption();
                    charger.PreviousState = charger.ChargerIsOn;
                    System.out.println("Charger is running");
                }
                // compare oldPower with newPower, if differ, change powerConsumption, else: do nothing
                if (oldChargePower != realChargePower) {
                    env.PowerConsumption.DevicePower.remove("charger");
                    env.PowerConsumption.DevicePower.put("charger", (int) realChargePower);
                    env.PowerConsumption.CalculateCurrentPowerConsumption();
//                    env.PowerConsumption.CurrentPowerConsumption += realChargePower - oldChargePower;
                    System.out.println("Current power consumption: " + env.PowerConsumption.CurrentPowerConsumption + "W");
                    oldChargePower = realChargePower;
                }
                float chargeAmount = (float) charger.ChargePowerPercentage / 100 * charger.ChargeCurrent * charger.ChargeVoltage / 60;
                if (env.Battery.BatteryCurrentCapacity + chargeAmount <= env.Battery.BatteryMaxCapacity) {
                    env.Battery.setBatteryCurrentCapacity(env.Battery.BatteryCurrentCapacity + (int) chargeAmount);
                } else {
                    env.Battery.setBatteryCurrentCapacity(env.Battery.BatteryMaxCapacity);
                }
            } else {
                // get currentPower, then remove from calculation of PowerComsumption
                if (charger.PreviousState) {
//                    if (charger.SetBatteryLimitPercentage && env.Battery.BatteryPercentage >= charger.BatteryLimitPercentage) {
//                        env.Battery.BatteryPercentage = charger.BatteryLimitPercentage;
//                    }
                    env.PowerConsumption.DevicePower.remove("charger");
                    env.PowerConsumption.CalculateCurrentPowerConsumption();
                    charger.PreviousState = charger.ChargerIsOn;
                    System.out.println("Charger is off");
                }
            }

            BufferedWriter bfw = null;
            try {
                bfw = new BufferedWriter(new FileWriter(file));
                bfw.write(gson.toJson(env));
                bfw.close();
            } catch (IOException e) {
                System.out.println("Cannot access file");
            }
        }
        relation.reactiveCancel();
        if (relation.isCanceled()) {
            System.out.println("Cancel!");
        }
        System.exit(0);
    }

    private static void CopyFromJsonString(Charger charger, String jsonString) {
        Charger ch = new Gson().fromJson(jsonString, Charger.class);
        charger.ChargerIsOn = ch.ChargerIsOn;
        charger.ChargeCurrent = ch.ChargeCurrent;
        charger.ChargePowerPercentage = ch.ChargePowerPercentage;
        charger.ChargeVoltage = ch.ChargeVoltage;
        charger.BatteryLimitPercentage = ch.BatteryLimitPercentage;
        charger.SetBatteryLimitPercentage = ch.SetBatteryLimitPercentage;
    }
}
