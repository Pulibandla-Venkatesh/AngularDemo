import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  token : string = ""

  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  // Retrieve token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isauthenticated(): boolean
  {
    const token = this.getToken();
    return token !== null && token !== undefined && token !== ""; // Check if token exists

  }

  logout() {
    localStorage.removeItem('authToken');
  }
}
