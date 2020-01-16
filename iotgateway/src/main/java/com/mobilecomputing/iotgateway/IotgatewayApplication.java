package com.mobilecomputing.iotgateway;

import com.mobilecomputing.iotgateway.CoapResources.*;
import com.mobilecomputing.iotgateway.Entities.Appliance;
import com.mobilecomputing.iotgateway.StaticData.StaticData;
import org.eclipse.californium.core.CoapServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.DataInputStream;
import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;

@SpringBootApplication
public class IotgatewayApplication {
    public static StaticData.Data Data = new StaticData.Data();

    public static void main(String[] args) throws IOException {
        if (args.length <= 0) {
            return;
        }
        SpringApplication.run(IotgatewayApplication.class, args);
        CoapServer coapServer = new CoapServer();
        coapServer.add(new TestResource("test"));
        coapServer.add(new BatteryResource("battery", Data));
        coapServer.add(new ChargerResource("charger", Data));
        coapServer.add(new PowerResource("power", Data));
        coapServer.add(new VehicleResource("vehicle", Data));
        for (String appliance : args) {
            Data.appliances.add(new Appliance(appliance, 0));
            coapServer.add(new ApplianceResource(appliance, Data));
        }
        coapServer.start();

        Timer timer = new Timer();
        // set observe period to be 1 second
        timer.schedule(new IotgatewayApplication.Clock1(), 0, 1000);
//        Thread tClock = new Thread(new Clock());
//        tClock.start();
        DataInputStream dis = new DataInputStream(System.in);
        while (dis.available() == 0) {
        }
        System.exit(0);
    }

    private static class Clock1 extends TimerTask {

        /**
         * The action to be performed by this timer task.
         */
        @Override
        public void run() {
            Data.Time.setCurrentTime(Data.Time.CurrentTime + 1);
        }
    }

    private static class Clock implements Runnable {

        /**
         * When an object implementing interface <code>Runnable</code> is used
         * to create a thread, starting the thread causes the object's
         * <code>run</code> method to be called in that separately executing
         * thread.
         * <p>
         * The general contract of the method <code>run</code> is that it may
         * take any action whatsoever.
         *
         * @see Thread#run()
         */
        @Override
        public void run() {
            while (true) {
                Data.Time.setCurrentTime(Data.Time.CurrentTime + 1);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
