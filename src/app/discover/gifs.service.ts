import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  apiKey: string = environment.giphyAPIKey;
  url: string = `${environment.giphyUrl}?api_key=${this.apiKey}&limit=12&q=`;

  constructor(private http: HttpClient) { }

  getGifs = (word: string):Observable<any> => {
    return this.http.get<any>(this.url+word).pipe( 
        catchError(this.handleError)
      )
  }

  private handleError = (err: HttpErrorResponse) => {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured during the process: ${err.error.message}`;
    }else{
      errorMessage = `Server returned code: ${err.status}, error message is : ${err.message}`
    }
    return throwError(errorMessage);
  }


}
