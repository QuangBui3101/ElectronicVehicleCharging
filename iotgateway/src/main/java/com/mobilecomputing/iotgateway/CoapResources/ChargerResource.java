package com.mobilecomputing.iotgateway.CoapResources;

import com.mobilecomputing.iotgateway.StaticData.StaticData;
import org.eclipse.californium.core.coap.CoAP;
import org.eclipse.californium.core.coap.CoAP.ResponseCode;
import org.eclipse.californium.core.coap.MediaTypeRegistry;
import org.eclipse.californium.core.server.resources.CoapExchange;

import java.util.Timer;
import java.util.TimerTask;

public class ChargerResource extends Resource {

    public ChargerResource(String name, StaticData.Data data) {
        super(name, data);
        // Enable observe resource for client
        setObservable(true);
        setObserveType(CoAP.Type.CON);
        getAttributes().setObservable();
        Timer timer = new Timer();
        // set observe period to be 1 second
        timer.schedule(new UpdateTask(), 0, 1000);
    }

    @Override
    public void handleGET(CoapExchange exchange) {
        exchange.accept();
        if (data != null && data.Charger != null) {
            exchange.respond(ResponseCode.CONTENT, gson.toJson(data.Charger), MediaTypeRegistry.APPLICATION_JSON);
        }
    }

    private class UpdateTask extends TimerTask {
        @Override
        public void run() {
            // Automatic turn on charger
            if ((data.Time.UseStartStopTime && data.Time.CurrentTime >= data.Time.StartChargeTime) && !data.Charger.ChargerIsOn) {
                data.Charger.ChargerIsOn = true;
                changed();
                data.Charger.PreviousState = data.Charger.ChargerIsOn;
                System.out.println("Switch on charger as in set time.");
            }
            // Automatic turn off charger
            if ((data.Battery.BatteryPercentage >= 100 || (data.Time.UseStartStopTime && (data.Time.CurrentTime >= data.Time.StopChargeTime || data.Time.CurrentTime < data.Time.StartChargeTime)) || (data.Charger.SetBatteryLimitPercentage && data.Battery.BatteryPercentage >= data.Charger.BatteryLimitPercentage)) && data.Charger.ChargerIsOn) {
                data.Charger.ChargerIsOn = false;
                changed();
                data.Charger.PreviousState = data.Charger.ChargerIsOn;
                System.out.println("Switch off charger due to battery full charge.");
            }
            // Toggle Charger manually
            if (data.Charger.PreviousState != data.Charger.ChargerIsOn) {
                changed();
                data.Charger.PreviousState = data.Charger.ChargerIsOn;
            }
            // ChargePower adapt to total power consumption
            if (data.Charger.ChargerIsOn) {
                float chargePower = (data.PowerConsumption.MaxPowerConsumption - data.PowerConsumption.CalculatePowerConsumptionWithoutCharger()) * 100 / (data.Charger.ChargeCurrent * data.Charger.ChargeVoltage);
                if (chargePower > 100) {
                    data.Charger.ChargePowerPercentage = 100;
                } else if (chargePower < 0) {
                    data.Charger.ChargePowerPercentage = 0;
                } else {
                    data.Charger.ChargePowerPercentage = (int) chargePower;
                }
                if (data.Charger.ChargePowerPercentage != data.Charger.OldChargerPowerPercentage) {
                    changed();
                    data.Charger.OldChargerPowerPercentage = data.Charger.ChargePowerPercentage;
                }
            }
        }
    }
}
