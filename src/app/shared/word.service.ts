import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private wordUrl: string = environment.url+'/words/';
  apiKey: string;


  constructor(private http: HttpClient) {
    this.apiKey = environment.apiKey;
  }

  getWord = (word: string): Observable<any> => {
    let options = {
      headers: {
        ['x-rapidapi-key']: this.apiKey,
        ['x-rapidapi-host']: 'wordsapiv1.p.rapidapi.com',
        ['useQueryString']: 'true'
      },
    }
    return this.http.get<any>(this.wordUrl+word,options).pipe(tap(data => console.log('Word Detail: ' + JSON.stringify(data))), catchError(this.handleError))
  }

  private handleError = (err: HttpErrorResponse) => {
    let errorMessage = ''
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`
    }else{
      errorMessage = `The Server returned code: ${err.status}, error message is: ${err.error.message}`
    }
    return throwError(errorMessage);
  }
}
