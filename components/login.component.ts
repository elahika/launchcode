import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-login',
  templateUrl: 'components/login.html'
})

export class LoginComponent {
  key = {}
  constructor(public router: Router) {
  }
  loginKey(){
  	console.log(this.key)
  	postFile("../r/login.r", JSON.stringify({email:this.key.email,password:this.key.password}), (x) =>{
      if(x=="error")
        alert("error")
      else
        this.router.navigate(['/home'])
  	} )
  }
  goRegister(){
  	console.log(this.key)
    this.router.navigate(['/register'])
  }



}
