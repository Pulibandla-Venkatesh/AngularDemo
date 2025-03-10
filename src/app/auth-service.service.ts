import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  token : string = ""

  isauthenticated(token: string)
  {
    if(token)
    {
      return true;
    }
    else{
      return false;
    }

  }
}
