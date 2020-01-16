package com.mobilecomputing.iotgateway.StaticData;

import com.mobilecomputing.iotgateway.Entities.*;

import java.time.LocalTime;
import java.util.ArrayList;

public class StaticData {
    public static class Data {
        public Battery Battery = new Battery();
        public Charger Charger = new Charger();
        public PowerConsumption PowerConsumption = new PowerConsumption();
        public ArrayList<Appliance> appliances = new ArrayList<>();
        public boolean EmptyBattery = false;

        public Time Time = new Time();
    }
}
