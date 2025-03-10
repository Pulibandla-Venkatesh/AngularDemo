import { Injectable } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  SharedSearch: any = '';

  cartArray : any =[];

  constructor() { }
}
