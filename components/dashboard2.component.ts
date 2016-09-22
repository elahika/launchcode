import {Component, onInit, ElementRef} from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import {TableViewComponent} from './tableView.component'
import {PlotViewComponent} from './plotView.component'




@Component({
	selector: 'my-dashboard2',
	templateUrl: 'components/dashboard2.html',
	  directives:  [ROUTER_DIRECTIVES, TableViewComponent, PlotViewComponent]


})
export class Dashboard2Component implements onInit{
	private sub:any;
 	id: string;

   constructor( private route: ActivatedRoute) {

   }

   // Load data ones componet is ready
   ngOnInit() {
		 let _ = this;
       // Subscribe to route params
       this.sub = this.route.params.subscribe(params => {
         _.id = params.id;
        // Retrieve Pet with Id route param

     });
   }

   ngOnDestroy() {
       // Clean sub to avoid memory leak
     this.sub.unsubscribe();
   }


}
