package com.mobilecomputing.actuator.Entities;

public class Battery {
    public int BatteryMaxCapacity; // const
    public int BatteryCurrentCapacity;
    public float BatteryPercentage;
    public int BatteryTemperature;

    public Battery() {
        BatteryMaxCapacity = 30000;
        BatteryCurrentCapacity = 300;
        BatteryPercentage = (float) BatteryCurrentCapacity / (float) BatteryMaxCapacity * 100;
        BatteryTemperature = 40;
    }

    public void setBatteryCurrentCapacity(int batteryCurrentCapacity) {
        BatteryCurrentCapacity = batteryCurrentCapacity;
        BatteryPercentage = (float) BatteryCurrentCapacity / (float) BatteryMaxCapacity * 100;
    }
}
