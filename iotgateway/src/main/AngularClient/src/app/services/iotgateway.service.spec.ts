/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IotgatewayService } from './iotgateway.service';

describe('Service: Iotgateway', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IotgatewayService]
    });
  });

  it('should ...', inject([IotgatewayService], (service: IotgatewayService) => {
    expect(service).toBeTruthy();
  }));
});
