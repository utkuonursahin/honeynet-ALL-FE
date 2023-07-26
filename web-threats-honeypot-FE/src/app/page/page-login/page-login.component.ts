import {Component} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import { Router} from "@angular/router";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html'
})
export class PageLoginComponent {
  protected loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  protected isPayloadWrong: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  handleLogin(){
    const username = this.loginForm.value.username ?? '';
    const password = this.loginForm.value.password ?? '';
    const response$ = this.authService.login(username,password);
    response$.subscribe(res => {
      if(res.authenticated){
        this.router.navigate(["/dashboard"]);
      }
      else {
        this.isPayloadWrong = true;
      }
    });
  }
}
