import {Component, ElementRef}  from '@angular/core';
import {SidebarAvatorComponent} from './componentFactory?sidebarAvator';
import {ROUTER_DIRECTIVES, Router}      from '@angular/router';

@Component({
  selector:    'my-sidebar',
  templateUrl: './components/templates/sidebar.html',
  directives:  [SidebarAvatorComponent, ROUTER_DIRECTIVES]
})
export class SidebarComponent {
  prilist = [];
  commodity: string
  constructor(public element: ElementRef, public router: Router) {
    var _ = this
    readFile("data/my-sidebar.json",x=>_.list=x)
  }
  selected(id : string){
    if(localStorage.id_token==="")
    alert("Please login first")
    else{
        this.router.navigate(['/home'])
    }
  }
}
