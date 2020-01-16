import { KeyValue } from '@angular/common';

export class PowerConsumption {
  public MaxPowerConsumption: number;
  public CurrentPowerConsumption: number;
  public DevicePower: KeyValue<string, number>;
}
