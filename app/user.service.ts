import { Injectable } from '@angular/core';
import { HttpClient,Observable,HttpHeaders } from '@angular/common/http';
import { LoggerService }from './logger.service';
import{ Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class UserService {
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
  constructor( private http:HttpClient) { }

   private users: string=[];
 
  getApi(){
     return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  postAPI(hero:Hero) Observable<Hero>{

     return this.http.post<Hero>("http://localhost/customapi/index.php",hero,httpOptions);
  }
  
}
