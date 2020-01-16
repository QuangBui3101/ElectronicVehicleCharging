package com.mobilecomputing.iotgateway.Controllers;

import com.mobilecomputing.iotgateway.Entities.Charger;
import com.mobilecomputing.iotgateway.Entities.IotResponse;
import com.mobilecomputing.iotgateway.Entities.Time;
import com.mobilecomputing.iotgateway.IotgatewayApplication;
import com.mobilecomputing.iotgateway.StaticData.StaticData;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path = "/clock")
public class ClockController {
    private StaticData.Data data = IotgatewayApplication.Data;

    @RequestMapping(path = "", method = RequestMethod.POST, produces = {MediaType.APPLICATION_XML_VALUE}, consumes = {MediaType.APPLICATION_XML_VALUE})
    public IotResponse SetClock(@RequestBody Time time) {
        data.Time.setCurrentTime(time.CurrentTime);
        return new IotResponse("OK");
    }

    @RequestMapping(path = "", method = RequestMethod.GET, produces = {MediaType.APPLICATION_XML_VALUE})
    public Time GetTime() {
        return data.Time;
    }

    @RequestMapping(path = "chargeschedule", method = RequestMethod.POST, produces = {MediaType.APPLICATION_XML_VALUE}, consumes = {MediaType.APPLICATION_XML_VALUE})
    public IotResponse SetChargeTime(@RequestBody Time time) {
        data.Time.setStartChargeTime(time.StartChargeTime);
        data.Time.setStopChargeTime(time.StopChargeTime);
        return new IotResponse("OK");
    }

    @RequestMapping(path = "useschedule", method = RequestMethod.POST, produces = {MediaType.APPLICATION_XML_VALUE}, consumes = {MediaType.APPLICATION_XML_VALUE})
    public IotResponse UseSchedule(@RequestBody Time time) {
        if (data.Time.StartChargeTime < 0 || data.Time.StopChargeTime < 0) {
            return new IotResponse("Unacceptable");
        }
        data.Time.UseStartStopTime = time.UseStartStopTime;
        return new IotResponse("OK");
    }
}
