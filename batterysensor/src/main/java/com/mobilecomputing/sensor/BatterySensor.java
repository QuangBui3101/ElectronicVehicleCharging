package com.mobilecomputing.sensor;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.stream.JsonReader;
import com.mobilecomputing.sensor.Entities.Battery;
import com.mobilecomputing.sensor.Entities.Environment;
import com.sun.org.apache.xerces.internal.impl.xs.SchemaSymbols;
import org.eclipse.californium.core.CoapClient;
import org.eclipse.californium.core.CoapResponse;
import org.eclipse.californium.core.coap.MediaTypeRegistry;

import java.io.*;

public class BatterySensor {
    public static Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public static void main(String[] args) throws InterruptedException, IOException {
        File file = new File("E:\\JavaSpring\\environment.json");
        if (!file.exists()) {
            file.createNewFile();
        }
        if (file.length() <= 0) {
            BufferedWriter bf = new BufferedWriter(new FileWriter(file));
            bf.write(gson.toJson(new Environment()));
            bf.close();
        }
        DataInputStream dis = new DataInputStream(System.in);
        CoapClient client = new CoapClient("coap://localhost/battery");
        CoapResponse response = null;
        while (dis.available() == 0) {
            // read from json file and send data back to the gateway
            JsonReader jreader = new JsonReader(new FileReader(file));
            Environment env = gson.fromJson(jreader, Environment.class);
            if (env == null) {
                Thread.sleep(100);
                continue;
            }
            Battery battery = env.Battery;
            response = client.post(gson.toJson(battery), MediaTypeRegistry.APPLICATION_JSON);
            if (response != null) {
                System.out.println("Battery percentage: " + String.format("%.2f", env.Battery.BatteryPercentage) + "%");
            } else {
                System.out.println("no response!");
            }
            Thread.sleep(1000);
        }
        System.exit(0);
    }
}
