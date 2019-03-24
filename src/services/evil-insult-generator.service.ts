import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvilInsultGeneratorService {
  private url = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {

  }
  getEvilInsult(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        console.log('getEvilInsult API', response);
        return response.json();
      })
    );
  }
}
