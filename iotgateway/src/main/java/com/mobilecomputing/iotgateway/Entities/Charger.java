package com.mobilecomputing.iotgateway.Entities;

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
        ChargePowerPercentage = 100;
        ChargeCurrent = 30; //A
        ChargeVoltage = 230; //V
        ChargerIsOn = false;
        OldChargerPowerPercentage = ChargePowerPercentage;
        PreviousState = ChargerIsOn;
        BatteryLimitPercentage = 100;
        SetBatteryLimitPercentage = false;
    }
}
