import {Component, onInit}   from '@angular/core';
import {SidebarComponent}    from './sidebar.component';
import {ChatComponent}       from './componentFactory?chat'
import {HeaderComponent}     from './header'
import {FooterComponent}     from './componentFactory?footer'
import {ROUTER_DIRECTIVES, Router}   from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './components/templates/app.html',
  directives: [HeaderComponent, SidebarComponent, ChatComponent, FooterComponent, ROUTER_DIRECTIVES],
})
export class AppComponent implements onInit{
  constructor(public router: Router) {
  }
  // user_id = window.user_id
  // routeLog(l){
  //   if(l==="login"){
  //     this.router.navigate(['/login'])
  //   }else{
  //     this.router.navigate([''])
  //   }
  // }
  // ngOnInit(){   }
}
