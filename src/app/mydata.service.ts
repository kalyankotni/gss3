import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFood } from './food';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
   url :string = "assets/food.json";
  constructor(private http:HttpClient) { }
  getFood(): Observable<any>{
    return this.http.get(this.url);
  }
}
