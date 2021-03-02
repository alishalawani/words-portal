import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  username: string;
  private authenticated: boolean = false;


  constructor() { }

  

}
