import {Component, OnDestroy} from '@angular/core';
import {User} from "../../model/User";
import {Subscription} from "rxjs";
import {GenericResponse} from "../../interface/GenericResponse";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html'
})
export class PageProfileComponent implements OnDestroy{
  protected userDetail: User = {} as User;
  protected userForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordConfirmation: new FormControl(''),
    newNotificationReceiverMail: new FormControl(''),
    notificationReceiverMails: new FormControl(''),
  });
  private subscription: Subscription = new Subscription();
  constructor(private userService:UserService) {
    this.subscription = this.userService.getMe().subscribe((response: GenericResponse<User>) => {
      this.userForm.patchValue(response.data);
      this.userDetail = response.data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
