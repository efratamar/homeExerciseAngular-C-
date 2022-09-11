import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {Data}from '../app/Data';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }
  
  public Post(dataVariable:Data)
  {
    return this.http.post("https://localhost:44326/api/Location/Post",dataVariable);
  }
}
