/**
 * Created by wQ on 2017/4/28.
 */

import {Injectable} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import {UserService} from "./user.service";
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private us:UserService,private route:Router){

  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this.us.isLogin){
      return true;
    }
    this.route.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    return false;
  }
}
