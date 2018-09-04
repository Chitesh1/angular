import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'selectedusers',
  templateUrl: './selectedusers.component.html',
  styleUrls: ['./selectedusers.component.css']
})
export class SelectedusersComponent implements OnInit {

  href= "";
  id="";
  private selectedid: string=[];
    constructor(private userservice:UserService,private router:Router,private http:HttpClient ) { }

  
  ngOnInit() {
   this.href = this.router.url;
   this.id=this.href.substring(14);
   //console.log(this.id);
   this.http.get("https://jsonplaceholder.typicode.com/users"+this.id).subscribe(data=>{this.selectedid = data as string[];});

  }

}
