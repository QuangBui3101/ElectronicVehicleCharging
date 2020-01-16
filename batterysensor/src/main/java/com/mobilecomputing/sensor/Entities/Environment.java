package com.mobilecomputing.sensor.Entities;

public class Environment {
    public Battery Battery;
    public PowerConsumption PowerConsumption;

    public Environment() {
        Battery = new Battery();
        PowerConsumption = new PowerConsumption();
    }
}
