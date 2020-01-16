/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PowerConsumptionService } from './powerConsumption.service';

describe('Service: PowerConsumption', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerConsumptionService]
    });
  });

  it('should ...', inject([PowerConsumptionService], (service: PowerConsumptionService) => {
    expect(service).toBeTruthy();
  }));
});
