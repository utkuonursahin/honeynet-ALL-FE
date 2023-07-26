import {Component, OnInit} from '@angular/core';
import User from "../../interface/User";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
})
export class PageDashboardComponent implements OnInit {
  protected users: User[] = [];
  constructor(private userService: UserService, private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    if(this.cookieService.get("authenticated") === "true") {
      const response$ = this.userService.getAllUsers();
      response$.subscribe(res => this.users = res.data)
    } else {
      this.router.navigate(["/"])
    }
  }
}
