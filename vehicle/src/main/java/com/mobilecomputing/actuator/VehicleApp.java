package com.mobilecomputing.actuator;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.stream.JsonReader;
import com.mobilecomputing.actuator.Entities.Environment;
import com.mobilecomputing.actuator.Entities.Vehicle;
import org.eclipse.californium.core.CoapClient;
import org.eclipse.californium.core.CoapHandler;
import org.eclipse.californium.core.CoapObserveRelation;
import org.eclipse.californium.core.CoapResponse;

import java.io.*;

public class VehicleApp {
    public static Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public static void main(String[] args) throws IOException, InterruptedException {
        final File file = new File("E:\\JavaSpring\\environment.json");
        final Vehicle vehicle = new Vehicle(false);
        if (!file.exists()) {
            file.createNewFile();
        }
        if (file.length() <= 0) {
            BufferedWriter bf = new BufferedWriter(new FileWriter(file));
            bf.write(gson.toJson(new Environment()));
            bf.close();
        }
        CoapClient client = new CoapClient("coap://localhost/vehicle");
        CoapObserveRelation relation = client.observe(new CoapHandler() {
            public void onLoad(CoapResponse coapResponse) {
                if (coapResponse != null) {
                    vehicle.EmptyBattery = gson.fromJson(coapResponse.getResponseText(), Vehicle.class).EmptyBattery;
                }
            }

            public void onError() {
                System.out.println("no response!");
            }
        });

        DataInputStream dis = new DataInputStream(System.in);
        while (dis.available() == 0) {
            if (vehicle.EmptyBattery) {
                JsonReader jreader = new JsonReader(new FileReader(file));
                Environment env = gson.fromJson(jreader, Environment.class);
                env.Battery.setBatteryCurrentCapacity(0);
                BufferedWriter bf = new BufferedWriter(new FileWriter(file));
                bf.write(gson.toJson(env));
                bf.close();
                System.out.println("Battery is reset.");
                vehicle.EmptyBattery = false;
            }
            Thread.sleep(1000);
        }
        relation.reactiveCancel();
        System.exit(0);
    }
}
