import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-login2',
  templateUrl: 'components/login2.html'
})
export class Login2Component {
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
