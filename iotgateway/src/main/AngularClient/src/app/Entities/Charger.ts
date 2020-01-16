export class Charger {
  public ChargePowerPercentage: number;
  public ChargeCurrent: number;
  public ChargeVoltage: number;
  public PreviousState: boolean;
  public ChargerIsOn: boolean;
  public OldChargerPowerPercentage: number;
  public BatteryLimitPercentage: number;
  public SetBatteryLimitPercentage: boolean;
}
