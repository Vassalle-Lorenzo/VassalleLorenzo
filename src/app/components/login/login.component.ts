import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
username: string;
password: string;
  eseguiLogin() {
    if ('username' == null){
      alert("Errore: inserire un Username!")
    }else if('password' == null)
      alert("Errore: inserire una Password!");
  }

}
