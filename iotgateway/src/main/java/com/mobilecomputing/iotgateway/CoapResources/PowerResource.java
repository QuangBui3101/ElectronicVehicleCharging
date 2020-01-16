package com.mobilecomputing.iotgateway.CoapResources;

import com.mobilecomputing.iotgateway.Entities.Battery;
import com.mobilecomputing.iotgateway.Entities.IotResponse;
import com.mobilecomputing.iotgateway.Entities.PowerConsumption;
import com.mobilecomputing.iotgateway.StaticData.StaticData;
import org.eclipse.californium.core.coap.CoAP;
import org.eclipse.californium.core.coap.MediaTypeRegistry;
import org.eclipse.californium.core.server.resources.CoapExchange;

public class PowerResource extends Resource {

    public PowerResource(String name, StaticData.Data data) {
        super(name, data);
    }

    @Override
    public void handlePOST(CoapExchange exchange) {
        exchange.accept();
        if (exchange.getRequestOptions().getContentFormat() == MediaTypeRegistry.APPLICATION_JSON) {
            data.PowerConsumption = gson.fromJson(exchange.getRequestText(), PowerConsumption.class);
//            System.out.println(gson.toJson(data.PowerConsumption));
            IotResponse obj = new IotResponse("ok");
//            System.out.println(gson.toJson(obj));
            exchange.respond(CoAP.ResponseCode.CONTENT, gson.toJson(obj), MediaTypeRegistry.APPLICATION_JSON);
        } else {
            IotResponse obj = new IotResponse("unacceptable");
//            System.out.println(gson.toJson(obj));
            exchange.respond(CoAP.ResponseCode.CONTENT, gson.toJson(obj), MediaTypeRegistry.APPLICATION_JSON);
        }
    }
}
