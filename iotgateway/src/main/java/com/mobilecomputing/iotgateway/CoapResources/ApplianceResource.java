package com.mobilecomputing.iotgateway.CoapResources;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mobilecomputing.iotgateway.Entities.Appliance;
import com.mobilecomputing.iotgateway.StaticData.StaticData;
import org.eclipse.californium.core.CoapResource;
import org.eclipse.californium.core.coap.CoAP;
import org.eclipse.californium.core.coap.MediaTypeRegistry;
import org.eclipse.californium.core.server.resources.CoapExchange;

import java.util.Timer;
import java.util.TimerTask;

public class ApplianceResource extends Resource {
    private static boolean previousState = false;
    private static Appliance appliance;

    public ApplianceResource(String name, StaticData.Data data) {
        super(name, data);
        appliance = data.appliances.stream().filter(appliance1 ->
                appliance1.Name.equals(name)
        ).findFirst().orElse(null);
        setObservable(true);
        setObserveType(CoAP.Type.CON);
        getAttributes().setObservable();
        Timer timer = new Timer();
        timer.schedule(new ApplianceResource.UpdateTask(), 0, 1000);
    }

    @Override
    public void handleGET(CoapExchange exchange) {
        exchange.accept();
        exchange.respond(CoAP.ResponseCode.CONTENT, gson.toJson(appliance), MediaTypeRegistry.APPLICATION_JSON);
    }

    private class UpdateTask extends TimerTask {

        /**
         * The action to be performed by this timer task.
         */
        @Override
        public void run() {
            if (previousState != appliance.IsOn) {
                changed();
                previousState = appliance.IsOn;
            }
        }
    }
}
