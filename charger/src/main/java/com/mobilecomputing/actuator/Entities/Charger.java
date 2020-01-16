package com.mobilecomputing.actuator.Entities;

public class Charger {
    public int ChargePowerPercentage;
    public float ChargeCurrent;
    public float ChargeVoltage;
    public boolean PreviousState;
    public boolean ChargerIsOn;
    public int OldChargerPowerPercentage;
    public int BatteryLimitPercentage;
    public boolean SetBatteryLimitPercentage;

    public Charger() {
        ChargerIsOn = false;
        ChargePowerPercentage = 100;
        ChargeCurrent = 30;
        ChargeVoltage = 230;
        OldChargerPowerPercentage = ChargePowerPercentage;
        PreviousState = ChargerIsOn;
        BatteryLimitPercentage = 100;
        SetBatteryLimitPercentage = false;
    }
}
