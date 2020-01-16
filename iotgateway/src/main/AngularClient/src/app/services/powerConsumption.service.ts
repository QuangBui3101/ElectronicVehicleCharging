import { PowerConsumption } from './../Entities/PowerConsumption';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PowerConsumptionService {
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

  getStatus(): Observable<PowerConsumption> {
    return this.httpClient.get<string>(environment.url + 'powerconsumption', { headers: this.header, responseType: 'text' as 'json' })
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
