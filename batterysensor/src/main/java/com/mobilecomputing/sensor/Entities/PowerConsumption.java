package com.mobilecomputing.sensor.Entities;

import java.util.HashMap;

public class PowerConsumption {
    public int MaxPowerConsumption;
    public int CurrentPowerConsumption;
    public HashMap<String, Integer> DevicePower = new HashMap<String, Integer>();

    public PowerConsumption() {
        MaxPowerConsumption = 20000; //kW
        CurrentPowerConsumption = 0; //kW
    }

    public void CalculateCurrentPowerConsumption() {
        int sum = 0;
        for (String key : DevicePower.keySet()) {
            sum += DevicePower.get(key);
        }
        CurrentPowerConsumption = sum;
    }

    public int CalculatePowerConsumptionWithoutCharger() {
        int sum = 0;
        for (String key : DevicePower.keySet()) {
            if (key != "charger") {
                sum += DevicePower.get(key);
            }
        }
        return sum;
    }
}
