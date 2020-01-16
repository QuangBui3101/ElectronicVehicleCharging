package com.mobilecomputing.sensor.Entities;

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
}
