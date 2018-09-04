import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   email=''
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  onClickSubmit(data){
    //this.email=data.email;
   //  alert("Entered"+ data.email);

   if(data.email=="chitesh.st@gmail.com" && data.password=="123456789"){
     this.router.navigate(['userlogin-component']);
     localStorage.setItem('user',data.email);
     localStorage.setItem('password',data.password);
     localStorage.setItem('status',"TRUE");
   }
   else {
       alert("Unsuccesfull");
       localStorage.setItem('user',data.email);
       localStorage.setItem('password',data.password);
       localStorage.setItem('status',"False");
   }
  }
}