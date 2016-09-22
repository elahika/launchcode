import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';
//import { contentHeaders } from '../common/headers';

//const styles   = require('./signup.css');
const template = 'components/register.html';

@Component({
  selector: 'register',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  templateUrl: template,
//  styles: [ styles ]
})
export class RegisterComponent {
  constructor(public router: Router ,public http: Http) {
  }
  key={}
  sendKey(){
    console.log(this.key)
  this.http.post("../r/register.r", JSON.stringify(this.key))
    .subscribe(
      response => {
        localStorage.setItem('id_token', response.json().id_token);
        this.router.navigate(['/home']);
      },
      error => {
        alert(error.text());
        console.log(error.text());
      }
    );
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }

}
