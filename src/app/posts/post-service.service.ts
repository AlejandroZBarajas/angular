import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from './modelo/iposts';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {
  private url : string ="https://jsonplaceholder.typicode.com/posts";

  constructor(private _http:HttpClient) { }

  getAllPosts(): Observable<IPosts[]>{
    return this._http.get<IPosts[]>(this.url)
  }
}
