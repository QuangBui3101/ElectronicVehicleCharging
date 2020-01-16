package com.mobilecomputing.iotgateway.Controllers;


import com.mobilecomputing.iotgateway.Entities.Charger;
import com.mobilecomputing.iotgateway.Entities.IotResponse;
import com.mobilecomputing.iotgateway.IotgatewayApplication;
import com.mobilecomputing.iotgateway.StaticData.StaticData;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path = "/charger")
public class ChargerController {
    private StaticData.Data data = IotgatewayApplication.Data;

    @RequestMapping(path = "powerpercentage", method = RequestMethod.POST, produces = {MediaType.APPLICATION_XML_VALUE}, consumes = {MediaType.APPLICATION_XML_VALUE})
    public IotResponse ChargerPower(@RequestBody Charger charger) {
        data.Charger.ChargePowerPercentage = charger.ChargePowerPercentage;
        return new IotResponse("OK");
    }

    @RequestMapping(path = "", method = RequestMethod.POST, produces = {MediaType.APPLICATION_XML_VALUE}, consumes = {MediaType.APPLICATION_XML_VALUE})
    public IotResponse ToggleChargerState(@RequestBody Charger charger) {
        data.Charger.ChargerIsOn = charger.ChargerIsOn;
        return new IotResponse("OK");
    }

    @RequestMapping(path = "status", method = RequestMethod.GET, produces = {MediaType.APPLICATION_XML_VALUE})
    public Charger GetStatus() {
        return data.Charger;
    }

    @RequestMapping(path = "limitbattery", method = RequestMethod.POST, produces = {MediaType.APPLICATION_XML_VALUE}, consumes = {MediaType.APPLICATION_XML_VALUE})
    public IotResponse ChargerLimitBatteryPercentage(@RequestBody Charger charger) {
        data.Charger.SetBatteryLimitPercentage = charger.SetBatteryLimitPercentage;
        if (data.Charger.SetBatteryLimitPercentage) {
            data.Charger.BatteryLimitPercentage = charger.BatteryLimitPercentage;
        }
        return new IotResponse("OK");
    }
}
