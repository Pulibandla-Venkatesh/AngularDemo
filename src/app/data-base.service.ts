import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { url } from "node:inspector";

@Injectable({
    providedIn: 'root'
})

export class DatabaseService {

    constructor(private _http: HttpClient){}

    userid : any 

    getProducts(){
        return this._http.get('https://localhost:44345/api/ProductModels');
        
    }

    postSignUp( data : any){
        var url = 'https://localhost:44345/api/UserModels';
        return this._http.post(url, data)

    }

    postLogin( data : any){
        var url = 'https://localhost:44345/api/Auth/login';
        return this._http.post(url, data)

    }

    addtoCart(data: any){
        console.log("data before post", data)
        var url ='https://localhost:44345/api/CartModels';
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Attach token
            'Content-Type': 'application/json'
        };
        return this._http.post(url, data, {headers})
    }


}