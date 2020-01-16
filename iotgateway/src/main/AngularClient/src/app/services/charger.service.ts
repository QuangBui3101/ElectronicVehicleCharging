import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Charger } from './../Entities/Charger';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js';
import { IotResponse } from '../Entities/IotResponse';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChargerService {
  header = new HttpHeaders().set('Content-Type', 'application/xml').set('Accept', 'application/xml');
  parser = new xml2js.Parser(
    {
      valueProcessors: [xml2js.processors.parseNumbers],
      explicitArray: false,
      explicitRoot: false
    }
  );
  builder = new xml2js.Builder({ explicitRoot: true, headless: true });
  constructor(private httpClient: HttpClient) { }

  setPowerPercentage(charger: Charger): Observable<IotResponse> {
    const xmlCharger = this.builder.buildObject(charger);
    return this.httpClient
      .post<string>(environment.url + 'charger/powerpercentage', xmlCharger, { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }

  toggleCharger(charger: Charger): Observable<IotResponse> {
    const xmlCharger = this.builder.buildObject(charger);
    return this.httpClient.post<string>(environment.url + 'charger', xmlCharger, { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }

  getStatus(): Observable<Charger> {
    return this.httpClient.get<string>(environment.url + 'charger/status', { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }

  limitBatteryPercentage(charger: Charger): Observable<IotResponse> {
    const xmlCharger = this.builder.buildObject(charger);
    return this.httpClient
      .post<string>(environment.url + 'charger/limitbattery', xmlCharger, { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }

  private parseObjectFromXml(xmlString: string): any {
    let object;
    this.parser.parseString(xmlString, (err, result: any) => {
      object = result;
    });
    return object;
  }
}
