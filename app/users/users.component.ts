import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private userservice: UserService) {this.userservice.getApi().subscribe(data=>{this.users = data as string[];}); }

  ngOnInit() {

  }

}
