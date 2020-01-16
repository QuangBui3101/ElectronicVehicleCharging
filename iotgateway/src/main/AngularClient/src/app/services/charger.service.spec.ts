/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChargerService } from './charger.service';

describe('Service: Charger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChargerService]
    });
  });

  it('should ...', inject([ChargerService], (service: ChargerService) => {
    expect(service).toBeTruthy();
  }));
});
