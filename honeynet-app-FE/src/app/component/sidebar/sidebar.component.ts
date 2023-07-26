import {Component, OnDestroy} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {User} from "../../model/User";
import {UserRole} from "../../enum/UserRole";
import {Firm} from "../../model/Firm";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnDestroy{
  protected user: User = JSON.parse(localStorage.getItem('user') || '{}');
  protected firm:Firm = JSON.parse(localStorage.getItem('firm') || '{}');
  private subscription: Subscription = new Subscription();
  constructor(private authService: AuthService, private toastrService: ToastrService ,private router: Router) {  }

  handleLogout(){
    this.subscription = this.authService.logout().subscribe({
      next: () => {
        localStorage.clear();
        this.toastrService.info('You have been logged out', 'Logout',{
          toastClass: 'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-yellow-500 text-neutral-100'
        });
        this.router.navigate(['/']);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected readonly UserRole = UserRole;
}
