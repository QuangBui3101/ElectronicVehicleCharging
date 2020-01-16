import { environment } from './../../environments/environment';
import { Data } from './../Entities/Data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IotResponse } from '../Entities/IotResponse';

@Injectable({
  providedIn: 'root'
})
export class IotgatewayService {
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

  getData(): Observable<Data> {
    return this.httpClient
      .get<string>(environment.url + 'data', { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }

  toggleWashingMachine(): Observable<IotResponse> {
    return this.httpClient
      .get<string>(environment.url + 'appliance?appliance=washingmachine', { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }

  emptyBattery(): Observable<IotResponse> {
    return this.httpClient
      .get<string>(environment.url + 'emptyBattery', { headers: this.header, responseType: 'text' as 'json' })
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
