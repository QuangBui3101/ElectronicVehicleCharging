package com.mobilecomputing.iotgateway.Controllers;

import com.mobilecomputing.iotgateway.Entities.Appliance;
import com.mobilecomputing.iotgateway.Entities.Charger;
import com.mobilecomputing.iotgateway.Entities.IotResponse;
import com.mobilecomputing.iotgateway.IotgatewayApplication;
import com.mobilecomputing.iotgateway.StaticData.StaticData;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path = "/")
public class GatewayController {
    private StaticData.Data data = IotgatewayApplication.Data;

    @RequestMapping(path = "ping", method = RequestMethod.GET)
    public String Ping() {
        return "Server is online";
    }

    @RequestMapping(path = "appliance", method = RequestMethod.GET, produces = {MediaType.APPLICATION_XML_VALUE})
    public IotResponse ToggleApplianceState(@RequestParam(value = "appliance", defaultValue = "") String applianceName) {
        if (applianceName == null || applianceName.equals("")) {
            return new IotResponse("unacceptable");
        }
        for (Appliance appliance : data.appliances) {
            if (appliance.Name.equals(applianceName)) {
                appliance.IsOn ^= true;
                return new IotResponse("OK");
            }
        }
        return new IotResponse("not found");
    }

    @RequestMapping(path = "emptyBattery", method = RequestMethod.GET, produces = {MediaType.APPLICATION_XML_VALUE})
    public IotResponse EmptyBattery() {
        data.EmptyBattery = true;
        return new IotResponse("OK");
    }

    @RequestMapping(path = "data", method = RequestMethod.GET, produces = {MediaType.APPLICATION_XML_VALUE})
    public StaticData.Data getData() {
        return data;
    }
}
