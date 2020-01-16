import { environment } from './../../environments/environment';
import { IotResponse } from './../Entities/IotResponse';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Time } from '../Entities/Clock';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
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

  getTime(): Observable<Time> {
    return this.httpClient
      .get<string>(environment.url + 'clock', { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }

  private parseObjectFromXml(xmlString: string): any {
    let object;
    this.parser.parseString(xmlString, (err, result: any) => {
      object = result;
    });
    return object;
  }

  setTime(clock: Time): Observable<IotResponse> {
    const xmlClock = this.builder.buildObject(clock);
    return this.httpClient
      .post<string>(environment.url + 'clock', xmlClock, { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }

  toggleSchedule(clock: Time): Observable<IotResponse> {
    const xmlClock = this.builder.buildObject(clock);
    return this.httpClient
      .post<string>(environment.url + 'clock/useschedule', xmlClock, { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }

  setSchedule(clock: Time): Observable<IotResponse> {
    const xmlClock = this.builder.buildObject(clock);
    return this.httpClient
      .post<string>(environment.url + 'clock/chargeschedule', xmlClock, { headers: this.header, responseType: 'text' as 'json' })
      .pipe(map(result => this.parseObjectFromXml(result)));
  }
}
