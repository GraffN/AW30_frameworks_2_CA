import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomAdviceGenerator {
  private url = 'https://api.adviceslip.com/advice';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {

  }
  getRandomAdvice(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        console.log('random advice', response);
        return response.json();
      })
    );
  }
}
