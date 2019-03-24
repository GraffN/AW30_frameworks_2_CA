import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomStuffTodoService {
  private url = 'http://www.boredapi.com/api/activity';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {

  }
  getRandomStuff(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        console.log('randomStuff API', response);
        return response.json();
      })
    );
  }
}
