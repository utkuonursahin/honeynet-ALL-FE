import {Component,OnDestroy} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Subscription} from "rxjs";

@Component({
  	selector: 'app-page-login',
  	templateUrl: './page-login.component.html'
})
export class PageLoginComponent implements OnDestroy{
	protected loginForm: FormGroup = new FormGroup({
		email: new FormControl(''),
		password: new FormControl(''),
	});
	protected formData = new FormData();
  private subscription: Subscription = new Subscription();

	constructor(private authService: AuthService, private toastrService: ToastrService, private router:Router) {}

	handleLogin(){
		this.formData.append('username', this.loginForm.value.email ?? '');
		this.formData.append('password', this.loginForm.value.password ?? '');
		this.subscription = this.authService.login(this.formData).subscribe({
      next : ({data:user,statusCode}) => {
        if(statusCode === 200){
          localStorage.clear();
          this.authService.switchSubject.next(false);
          localStorage.setItem('user' ,JSON.stringify(user))
          this.authService.userSubject.next(user);
          this.toastrService.success('You\'ve successfully logged in!', 'Login',{
            toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-green-500 text-neutral-100',
          });
          if(user.role === 'SUPER_ADMIN') this.router.navigateByUrl('/firms');
          else this.router.navigateByUrl('/dashboard');
        }
      },
      error: () => {
        this.loginForm.reset();
        this.toastrService.error('No email/password found with given inputs', 'Failure',{
          toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-red-500 text-neutral-100',
        });
      }
    });
	}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
