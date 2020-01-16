package com.mobilecomputing.actuator.Entities;

public class Appliance {
    public String Name;
    public int PowerConsumption;
    public boolean IsOn;
    public boolean PreviousState;

    public Appliance(String name, int powerConsumption) {
        this.Name = name;
        this.PowerConsumption = powerConsumption;
        this.IsOn = false;
        this.PreviousState = this.IsOn;
    }

    public void SetState(boolean state) {
        this.IsOn = state;
    }
}
