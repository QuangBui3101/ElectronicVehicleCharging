package com.mobilecomputing.iotgateway.Entities;

public class Appliance {
    public String Name;
    public int PowerConsumption;
    public boolean IsOn;

    public Appliance(String name, int powerConsumption) {
        this.Name = name;
        this.PowerConsumption = powerConsumption;
        this.IsOn = false;
    }

    public void SetState(boolean state) {
        this.IsOn = state;
    }
}
