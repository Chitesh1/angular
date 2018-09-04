import { Component } from '@angular/core';
import {UserService} from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'htps';
  constructor( private userservice: UserService){}
   ngOnInit(){
//     this.userservice.getApi().subscribe(data=>{this.users = data as string[];console.log(this.users[1])});

   }
}
