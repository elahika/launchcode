import { Component, onInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {Login2Component}			           from './login2.component';
@Component({
  selector: 'my-header',
  templateUrl: 'components/header.html',
  directives : [Login2Component]
//  styles: [ styles ]
})

export class HeaderComponent implements onInit{
constructor(public router: Router, public http: Http) {
}
loginStatus = "login"
logBut = "Login"
key = {}
response: string;
ngOnInit (){
  let token = localStorage.getItem('id_token');
  let _ = this;
  if(token != ""){
    console.log(`We have a token ${token}`)
    this.loginStatus = "logout"
    setTimeout(function() { _.router.navigate(['/home']) }, 500);

  }
  else{

    console.log("We dont have a token!")
  }
}
search(ele) {
  if(event.keyCode == 13) {
      let x = "'" + $("#top-search")[0].value + "' %?% A";
      // postFile("../r/AnalyticWorkbench.r",
      //          "paste(capture.output("+x+"),collapse='\n')",
      //          x=>alert(x))
      console.r(x)
      // var myWindow = window.open("", "mywin","");
      // myWindow.document.write("<p>I replaced the current window.</p>");

  }
}
loginKey(){
  console.log(this.key)
  postFile("../r/login.r", JSON.stringify({email:this.key.email,password:this.key.password}), (x) =>{
    if(x=="error"){
      alert("Wrong username or password")

    }
    else{
      $('#myModal').modal('hide');
      this.router.navigate(['/home'])
      this.loginStatus = "logout"
      $('#user_id_avator').html("Hello "+x);
        localStorage.setItem('id_token', x);
      }

  } )
}
goRegister(){
  console.log(this.key)
  this.loginStatus = "register"
//  this.router.navigate(['/register'])
}
showModal(){
  if(this.loginStatus==="logout"){
      this.router.navigate([''])
      this.loginStatus="login"
      $('#user_id_avator').html("Hello guest");
      localStorage.setItem('id_token', "");
    }
  else
      $('#myModal').modal('show');

}
sendKey(){
  console.log(this.key)
  this.http.post("../r/register.r", JSON.stringify(this.key))
    .subscribe(
      response => {
        localStorage.setItem('id_token', response.json().id_token);
        $('#myModal').modal('hide');
        this.router.navigate(['/home'])
        this.loginStatus = "logout"
        $('#user_id_avator').html("Hello "+this.key.name);
      },
      error => {
        alert(error.text());
        console.log(error.text());
      }
    );
}



}
