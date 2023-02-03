import { Component } from '@angular/core';
import { environements } from 'src/environements/environements';
import { LocationResponse, WeatherService } from '../app/services/weather/weather.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent {
  title = environements.title;
  cityInfo?:LocationResponse;

  constructor(private weatherService : WeatherService){}

  ngOninit(){
    this.weatherService.getLocation(92012).subscribe((next) => {
      this.cityInfo = next;
    });
  }

}
