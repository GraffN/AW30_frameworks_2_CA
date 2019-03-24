import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoxPictureGenerator {
  private url = 'https://randomfox.ca/floof/';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {

  }
  getFoxPicture(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        console.log('foxpicture', response);
        return response.json();
      })
    );
  }
}
