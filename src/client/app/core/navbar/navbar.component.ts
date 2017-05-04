import { Component ,Input} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';
// import {isEnlish} from '../changeLanguage';
/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {
  // isEN:boolean=false;
  // private isEN:ChangeLanguage;
  isEN:boolean;

  // chooseLanguage:Array<String>=['EN','CN','CT'];
  // language:any='CN';
  constructor(
    private userService:UserService,
    private router:Router){

  }
  changeLanguage(){
    // this.isEN=isEnglish;
    this.isEN=!this.isEN
    return this.isEN;
    // console.log(isEnlish)
      // this.isEN=this.res.isEnglish;
      // this.isEN=!this.isEN;
      // return this.isEN;
  }

  logout() {
    this.userService.isLogin = false;
    this.userService.userInfo = null;
    this.router.navigate(['']);
  }
}
