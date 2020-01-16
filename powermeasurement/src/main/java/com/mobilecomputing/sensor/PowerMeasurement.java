package com.mobilecomputing.sensor;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.stream.JsonReader;
import com.mobilecomputing.sensor.Entities.Environment;
import com.mobilecomputing.sensor.Entities.PowerConsumption;
import org.eclipse.californium.core.CoapClient;
import org.eclipse.californium.core.CoapResponse;
import org.eclipse.californium.core.coap.MediaTypeRegistry;

import java.io.*;
import java.util.Random;

public class PowerMeasurement {
    public static Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public static void main(String[] args) throws InterruptedException, IOException {
        CoapClient client = new CoapClient("coap://localhost/power");
        File file = new File("E:\\JavaSpring\\environment.json");
        if (!file.exists()) {
            file.createNewFile();
        }
        if (file.length() <= 0) {
            BufferedWriter bf = new BufferedWriter(new FileWriter(file));
            bf.write(gson.toJson(new Environment()));
            bf.close();
        }
        CoapResponse response = null;
        DataInputStream dis = new DataInputStream(System.in);
        while (dis.available() == 0) {
            // read from json file
            JsonReader jreader = new JsonReader(new FileReader(file));
            Environment env = gson.fromJson(jreader, Environment.class);
            if (env == null) {
                Thread.sleep(100);
                continue;
            }
//            powerConsumption.CurrentPowerConsumption = random.nextInt(powerConsumption.MaxPowerConsumption + 1);
            response = client.post(gson.toJson(env.PowerConsumption), MediaTypeRegistry.APPLICATION_JSON);
            if (response != null) {
                System.out.println("Current Power Consumption: " + env.PowerConsumption.CurrentPowerConsumption + "W");
            } else {
                System.out.println("no response!");
            }
            Thread.sleep(1000);
        }
    }
}
