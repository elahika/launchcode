import { CanActivate } from '@angular/router';

export class AuthGuard implements CanActivate {

  canActivate() {
    let token = localStorage.getItem('id_token');
    if (token!="") {
      return true;
    }

    alert("Please login first")
    return false;
  }

}
