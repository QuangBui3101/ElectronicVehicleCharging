package com.mobilecomputing.iotgateway.Entities;

public class Time {
    public int CurrentTime;
    public int StartChargeTime;
    public int StopChargeTime;
    public boolean UseStartStopTime;

    public Time() {
        CurrentTime = 0;
        StartChargeTime = StopChargeTime = -1;
        UseStartStopTime = false;
    }

    public void setCurrentTime(int currentTime) {
        if (currentTime > 86399 || currentTime < 0) {
            CurrentTime = 0;
        } else {
            CurrentTime = currentTime;
        }
    }

    public void setStartChargeTime(int startChargeTime) {
        if (startChargeTime > 86399 || startChargeTime < 0) {
            StartChargeTime = 0;
        } else {
            StartChargeTime = startChargeTime;
        }
    }

    public void setStopChargeTime(int stopChargeTime) {
        if (stopChargeTime > 86399 || stopChargeTime < 0) {
            StopChargeTime = 0;
        } else {
            StopChargeTime = stopChargeTime;
        }
    }
}
