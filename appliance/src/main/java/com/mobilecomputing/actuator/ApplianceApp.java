package com.mobilecomputing.actuator;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.stream.JsonReader;
import com.mobilecomputing.actuator.Entities.Appliance;
import com.mobilecomputing.actuator.Entities.Environment;
import org.eclipse.californium.core.CoapClient;
import org.eclipse.californium.core.CoapHandler;
import org.eclipse.californium.core.CoapObserveRelation;
import org.eclipse.californium.core.CoapResponse;

import java.io.*;

public class ApplianceApp {
    public static Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public static void main(String[] args) throws IOException, InterruptedException {
        boolean isExit = false;
        if (args.length != 2) {
            isExit = true;
        }
        String applianceName = args[0];
        int power = 0;
        try {
            power = Integer.parseInt(args[1]);
        } catch (NumberFormatException e) {
            isExit = true;
        }
        if (isExit) {
            System.out.println("Unacceptable parameters. Please provide appliance name and its power consumption.");
            System.out.println("Example: java -jar applicationName.jar washingmachine 100");
            System.exit(1);
        }
        File file = new File("E:\\JavaSpring\\environment.json");
        if (!file.exists()) {
            file.createNewFile();
        }
        if (file.length() <= 0) {
            BufferedWriter bf = new BufferedWriter(new FileWriter(file));
            bf.write(gson.toJson(new Environment()));
            bf.close();
        }

        CoapClient client = new CoapClient("coap://localhost/" + applianceName);
        final Appliance appliance = new Appliance(applianceName, power);
        DataInputStream dis = new DataInputStream(System.in);

        CoapObserveRelation relation = client.observe(new CoapHandler() {
            public void onLoad(CoapResponse coapResponse) {
                if (coapResponse != null) {
                    appliance.IsOn = gson.fromJson(coapResponse.getResponseText(), Appliance.class).IsOn;
                }
            }

            public void onError() {
                System.out.println("no response");
            }
        });
        while (dis.available() == 0) {
            JsonReader jreader = new JsonReader(new FileReader(file));
            Environment env = gson.fromJson(jreader, Environment.class);
            if (env == null) {
                Thread.sleep(100);
                continue;
            }
            if (appliance.PreviousState != appliance.IsOn) {
                if (appliance.IsOn) {
                    env.PowerConsumption.DevicePower.put(applianceName, appliance.PowerConsumption);
                    System.out.println("Appliance " + appliance.Name + " is running with power " + appliance.PowerConsumption + "W");
                } else {
                    env.PowerConsumption.DevicePower.remove(applianceName);
                    System.out.println("Appliance is off");
                }
                env.PowerConsumption.CalculateCurrentPowerConsumption();
                appliance.PreviousState = appliance.IsOn;
            }
            BufferedWriter bf = new BufferedWriter(new FileWriter(file));
            bf.write(gson.toJson(env, Environment.class));
            bf.close();
            Thread.sleep(1000);
        }
        System.exit(0);
    }
}
