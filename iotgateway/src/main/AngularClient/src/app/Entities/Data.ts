import { Time } from './Clock';
import { Appliance } from './Appliance';
import { PowerConsumption } from './PowerConsumption';
import { Charger } from './Charger';
import { Battery } from './Battery';
export class Data {
  public Battery: Battery;
  public Charger: Charger;
  public PowerConsumption: PowerConsumption;
  public appliances: Appliance[];
  public EmptyBattery: boolean;
  public Time: Time;
}
