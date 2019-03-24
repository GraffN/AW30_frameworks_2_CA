import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather-service.service';
import { EvilInsultGeneratorService } from '../../services/evil-insult-generator.service';
import 'rxjs';
import {FoxPictureGenerator} from '../../services/fox-picture.service';
import {RandomStuffTodoService} from '../../services/random-stuff-todo.service';
import {RandomAdviceGenerator} from '../../services/random-advice.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [WeatherService, EvilInsultGeneratorService, FoxPictureGenerator, RandomStuffTodoService, RandomAdviceGenerator]
})
export class DashboardPageComponent implements OnInit {

  public weatherDetail: Array<any>;
  public evilInsultDetail: EvilInsultInterface = {};
  public foxPictureDetail: FoxPictureInterface = {};
  public randomStuffToDoDetail: RandomStuffToDoInterface = {};
  public randomAdviceDetail : RandomAdviceInterface = {};

  constructor(
    protected router: Router,
    private weatherService: WeatherService,
    private evilInsultService: EvilInsultGeneratorService,
    private foxPictureService: FoxPictureGenerator,
    private randomStuffToDoService: RandomStuffTodoService,
    private randomAdviceService : RandomAdviceGenerator

    ) {}

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
    this.weatherService.getWeekForecast()
    .subscribe(
      weather => {
      this.weatherDetail = weather.consolidated_weather;
    });
    this.evilInsultService.getEvilInsult()
      .subscribe(
        insult => {
          console.log('insult', insult);
          this.evilInsultDetail = insult;
        });
    this.foxPictureService.getFoxPicture()
      .subscribe(
        image => {
          console.log('url', image);
          this.foxPictureDetail = image;
        });
    this.randomStuffToDoService.getRandomStuff()
      .subscribe(
        toDo => {
          console.log('url', toDo);
          this.randomStuffToDoDetail = toDo;
        });
    this.randomAdviceService.getRandomAdvice()
      .subscribe(
        advice => {
          console.log('advice', advice);
          this.randomAdviceDetail = advice;
        });
  }
}

interface EvilInsultInterface {
  number?: number;
  created?: string;
  insult?: string;
}

interface WeatherInterface {
  weather_state_name: string;
  min_temp: string;
  max_temp: string;
}
interface FoxPictureInterface {
  image?: string;

}
interface RandomStuffToDoInterface {
  activity?: string;
}
interface RandomAdviceInterface {
  advice?: string;
}
