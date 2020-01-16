import { Charger } from './../../Entities/Charger';
import { BatteryService } from './../../services/battery.service';
import { ChargerService } from './../../services/charger.service';
import { Data } from './../../Entities/Data';
import { IotgatewayService } from './../../services/iotgateway.service';
import { Time } from './../../Entities/Clock';
import { ClockService } from './../../services/clock.service';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { startWith, switchMap, min } from 'rxjs/operators';
import { IotResponse } from 'src/app/Entities/IotResponse';

@Component({
  selector: 'app-iot-gateway',
  templateUrl: './iot-gateway.component.html',
  styleUrls: ['./iot-gateway.component.css']
})
export class IotGatewayComponent implements OnInit {
  clock: Time;
  hour: number;
  minute: number;
  second: number;
  showSecond = false;
  useStartStopChargeTime = false;
  changeCurrentTime = false;
  time: string;
  status: string;
  changeSchedule = false;
  startTime: string;
  stopTime: string;
  setScheduleStatus: string;
  data: Data;
  charger: Charger;
  updateBatteryLimitPercentage = true;
  batteryLimitPercentage: number;
  setBatteryLimitPercentage = false;
  disableChargerState: boolean;
  chargeState = false;
  chargerPowerConsumption: number;
  batteryMaxCapacity: number;
  batteryPercentage: number;
  powerConsumption: number;
  washingMachineState: boolean;
  constructor(
    private clockService: ClockService,
    private iotgatewayService: IotgatewayService,
    private chargerService: ChargerService,
    private batteryService: BatteryService) { }

  ngOnInit() {
    // this.getData();
    interval(1000)
      .pipe(startWith(0), switchMap(() => this.iotgatewayService.getData()))
      .subscribe(res => {
        this.data = res;
        this.clock = this.data.Time;
        this.useStartStopChargeTime = (this.data.Time.UseStartStopTime as any) === 'true';
        this.clock = this.data.Time;
        this.calculateTime(this.clock.CurrentTime);
        this.charger = this.data.Charger;
        this.chargeState = (this.charger.ChargerIsOn as any) === 'true';
        this.disableChargerState = false;
        this.chargerPowerConsumption = this.charger.ChargePowerPercentage / 100 * this.charger.ChargeCurrent * this.charger.ChargeVoltage;
        if (this.updateBatteryLimitPercentage) {
          this.batteryLimitPercentage = this.charger.BatteryLimitPercentage;
          this.updateBatteryLimitPercentage = false;
        }
        this.setBatteryLimitPercentage = (this.charger.SetBatteryLimitPercentage as any) === 'true';
        this.batteryMaxCapacity = this.data.Battery.BatteryMaxCapacity;
        this.batteryPercentage = this.data.Battery.BatteryPercentage;
        this.powerConsumption = this.data.PowerConsumption.CurrentPowerConsumption;
        this.washingMachineState = (this.data.appliances as any).appliances.IsOn === 'true';
      });
    // interval(1000)
    //   .pipe(startWith(0), switchMap(() => this.clockService.getTime()))
    //   .subscribe(res => {
    //     this.clock = res;
    //     this.calculateTime(this.clock.CurrentTime);
    //   });
    // this.chargeState = false;
  }

  onClick() {
    if (this.showSecond) {
      this.showSecond = false;
    } else {
      this.showSecond = true;
    }
  }

  private calculateTime(time: number): void {
    this.second = time % 60;
    this.minute = Math.floor(time / 60) % 60;
    this.hour = Math.floor(time / 3600) % 60;
  }

  changeTime() {
    if (this.time) {
      const timeArray = this.time.split(':');
      this.clock.CurrentTime = +timeArray[0] * 3600 + +timeArray[1] * 60;
      this.clockService.setTime(this.clock).subscribe(res => this.status = res.status);
    }
  }

  getTime() {
    this.time = this.DisplaySecondAsTime(this.clock.CurrentTime);
  }

  toggleUseSchedule() {
    this.useStartStopChargeTime = !this.useStartStopChargeTime;
    this.clock.UseStartStopTime = this.useStartStopChargeTime;
    this.clockService.toggleSchedule(this.clock).subscribe(res => this.setScheduleStatus = res.status);
  }

  setSchedule() {
    const startTimeArray = this.startTime.split(':');
    const stopTimeArray = this.stopTime.split(':');
    this.clock.StartChargeTime = +startTimeArray[0] * 3600 + +startTimeArray[1] * 60;
    this.clock.StopChargeTime = +stopTimeArray[0] * 3600 + +stopTimeArray[1] * 60;
    if (this.clock.StartChargeTime > this.clock.StopChargeTime) {
      this.setScheduleStatus = 'Start time must be smaller than stop time';
      return;
    }
    this.clockService.setSchedule(this.clock).subscribe(res => this.setScheduleStatus = res.status);
  }

  getSchedule() {
    if (this.clock.StartChargeTime < 0) {
      this.startTime = this.DisplaySecondAsTime(0);
    } else {
      this.startTime = this.DisplaySecondAsTime(this.clock.StartChargeTime);
    }
    if (this.clock.StopChargeTime < 0) {
      this.stopTime = this.DisplaySecondAsTime(0);
    } else {
      this.stopTime = this.DisplaySecondAsTime(this.clock.StopChargeTime);
    }
  }

  getData() {
    this.iotgatewayService.getData().subscribe(res => {
      this.data = res;
      this.clock = this.data.Time;
      this.useStartStopChargeTime = (this.data.Time.UseStartStopTime as any) === 'true';
      this.clock = this.data.Time;
      this.chargeState = this.data.Charger.ChargerIsOn as any === 'true';
      this.charger = this.data.Charger;
    });
  }

  updateBatLimitPercent(newValue) {
    if (this.setBatteryLimitPercentage === false) {
      this.batteryLimitPercentage = +newValue;
    }
  }

  setBatLimitPercent() {
    this.setBatteryLimitPercentage = !this.setBatteryLimitPercentage;
    this.charger.SetBatteryLimitPercentage = this.setBatteryLimitPercentage;
    if (this.setBatteryLimitPercentage === true) {
      this.charger.BatteryLimitPercentage = this.batteryLimitPercentage;
    }
    this.chargerService.limitBatteryPercentage(this.charger).subscribe();
  }

  toggleCharger() {
    this.chargeState = !this.chargeState;
    this.charger.ChargerIsOn = this.chargeState;
    this.chargerService.toggleCharger(this.charger).subscribe();
    this.disableChargerState = true;
  }

  toggleWashingMachine() {
    this.washingMachineState = !this.washingMachineState;
    this.iotgatewayService.toggleWashingMachine().subscribe();
  }

  emptyBattery() {
    this.iotgatewayService.emptyBattery().subscribe();
  }

  private DisplaySecondAsTime(time: number): string {
    const second = time % 60;
    const minute = Math.floor(time / 60) % 60;
    const hour = Math.floor(time / 3600) % 60;
    return `${hour < 10 ? `0${hour}` : `${hour}`}:${minute < 10 ? `0${minute}` : `${minute}`}`;
  }

  onReload() {
    window.location.reload();
  }
}
