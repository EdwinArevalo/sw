import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private httpClient: HttpClient) { 

  }

  test(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
