import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environements } from 'src/environements/environements';


export interface LocationResponse {
  city: {
    insee: string;
    sp: number;
    latitude: number;
    longitude: number;
    altitude: number;
    name: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl = environements.weatherApi.url;
  apiToken = environements.weatherApi.token;

  constructor(private httpClient: HttpClient) { }

  getLocation(inseeCode : number){
    const url = `${this.apiUrl}/location/city?token=${this.apiToken}$insee=${inseeCode}`;
    return this.httpClient.get<LocationResponse>(url);
  }
}
