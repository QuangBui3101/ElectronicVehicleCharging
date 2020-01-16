package com.mobilecomputing.iotgateway.CoapResources;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mobilecomputing.iotgateway.StaticData.StaticData;
import org.eclipse.californium.core.CoapResource;

public abstract class Resource extends CoapResource {
    public StaticData.Data data;
    public Gson gson;

    public Resource(String name, StaticData.Data data) {
        super(name);
        this.data = data;
        gson = new GsonBuilder().setPrettyPrinting().create();
    }
}
