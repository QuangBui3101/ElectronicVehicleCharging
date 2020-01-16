package com.mobilecomputing.iotgateway.Controllers;

import com.mobilecomputing.iotgateway.Entities.PowerConsumption;
import com.mobilecomputing.iotgateway.IotgatewayApplication;
import com.mobilecomputing.iotgateway.StaticData.StaticData;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path = "/powerconsumption")
public class PowerConsumptionController {
    private StaticData.Data data = IotgatewayApplication.Data;

    @RequestMapping(path = "", method = RequestMethod.GET, produces = {MediaType.APPLICATION_XML_VALUE})
    public PowerConsumption GetStatus() {
        return data.PowerConsumption;
    }
}
