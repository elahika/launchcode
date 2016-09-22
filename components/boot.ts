import {bootstrap}                     from '@angular/platform-browser-dynamic';
import {AppComponent}                  from './app.component';
import {APP_ROUTER_PROVIDERS}          from './route';
import {provideRouter, RouterConfig }  from '@angular/router';
import {LoginComponent}			           from './login.component';

import {HomeComponent}			           from  './componentFactory?home'
import {RegisterComponent}			           from './register.component';
import {Dashboard2Component}			     from './dashboard2.component';

//import {Dashboard1Component}           from './componentFactory?dashboard1'
import {TextAreaComponent}             from './componentFactory?textArea'
import {FirstComponent}             from './componentFactory?first'
import {FateTableComponent}            from './componentFactory?fateTable'
import { HTTP_PROVIDERS } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TableViewComponent} from './tableView.component'
import { PlotViewComponent} from './plotView.component'
import { AuthGuard } from './common/auth.guard';
//import { AppModule }              from './app.module';


export const routes: RouterConfig = [
  { path: 'home',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  { path: 'home/:id', component: Dashboard2Component, canActivate: [AuthGuard] },
//  {path: 'home/:id', component: Dashboard2Component},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component:FirstComponent },
  {path: 'table', component: TableViewComponent},
  {path: 'plot', component: PlotViewComponent},
];


bootstrap(AppComponent,[provideRouter(routes), HTTP_PROVIDERS, AuthGuard]).catch(err => console.error(err));;


//platformBrowserDynamic().bootstrapModule(AppModule);
