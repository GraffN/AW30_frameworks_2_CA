import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather-service.service';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [WeatherService]
})
export class DashboardPageComponent implements OnInit {

  public weatherDetail: WeatherInterface;
  // public evilInsultDetail: EvilInsultInterface = {};
  // public foxPictureDetail: FoxPictureInterface = {};
  // public randomStuffToDoDetail: RandomStuffToDoInterface = {};
  // public randomAdviceDetail : RandomAdviceInterface = {};

  constructor(
    protected router: Router,
    private weatherService: WeatherService,
    // private evilInsultService: EvilInsultGeneratorService,
    // private foxPictureService: FoxPictureGenerator,
    // private randomStuffToDoService: RandomStuffTodoService,
    // private randomAdviceService : RandomAdviceGenerator

    ) {}

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
    this.weatherService.getWeekForecast()
    .subscribe(
      weather => {
        console.log("Weather: " + weather.consolidated_weather);
      this.weatherDetail = weather.consolidated_weather;
    });
    // this.evilInsultService.getEvilInsult()
    //   .subscribe(
    //     insult => {
    //       console.log('insult', insult);
    //       this.evilInsultDetail = insult;
    //     });
    // this.foxPictureService.getFoxPicture()
    //   .subscribe(
    //     image => {
    //       console.log('url', image);
    //       this.foxPictureDetail = image;
    //     });
    // this.randomAdviceService.getRandomAdvice()
    //   .subscribe(
    //     advice => {
    //       console.log('advice', advice);
    //       this.randomAdviceDetail = advice;
    //     });
  }
}

// interface EvilInsultInterface {
//   number?: number;
//   created?: string;
//   insult?: string;
// }

interface WeatherInterface {
  name: string;
  type: string;
  rarity: string;
}
// interface FoxPictureInterface {
//   image?: string;
//
// }
// interface RandomStuffToDoInterface {
//   activity?: string;
// }
// interface RandomAdviceInterface {
//   advice?: string;
// }
