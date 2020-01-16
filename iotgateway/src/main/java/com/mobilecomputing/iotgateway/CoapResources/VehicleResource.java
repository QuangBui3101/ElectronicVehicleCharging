package com.mobilecomputing.iotgateway.CoapResources;

import com.mobilecomputing.iotgateway.Entities.Vehicle;
import com.mobilecomputing.iotgateway.StaticData.StaticData;
import org.eclipse.californium.core.coap.CoAP;
import org.eclipse.californium.core.server.resources.CoapExchange;

import java.util.Timer;
import java.util.TimerTask;

public class VehicleResource extends Resource {
    public VehicleResource(String name, StaticData.Data data) {
        super(name, data);
        setObservable(true);
        setObserveType(CoAP.Type.CON);
        getAttributes().setObservable();
        Timer timer = new Timer();
        timer.schedule(new VehicleResource.UpdateTask(), 0, 1000);
    }

    @Override
    public void handleGET(CoapExchange exchange) {
        exchange.accept();
        exchange.respond(gson.toJson(new Vehicle(data.EmptyBattery)));
    }

    private class UpdateTask extends TimerTask {
        @Override
        public void run() {
            if (data.EmptyBattery) {
                changed();
                data.EmptyBattery = false;
            }
        }
    }
}
