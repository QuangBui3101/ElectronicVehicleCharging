package com.mobilecomputing.iotgateway.Entities;

public class Battery {
    public int BatteryMaxCapacity; // const
    public int BatteryCurrentCapacity;
    public float BatteryPercentage;
    public int BatteryTemperature;

    public Battery() {
        BatteryMaxCapacity = 30000;
        BatteryCurrentCapacity = 1000;
        BatteryPercentage = (float) BatteryCurrentCapacity / (float) BatteryMaxCapacity * 100;
        BatteryTemperature = 30;
    }
}
