import {Component, OnDestroy} from '@angular/core';
import {ProfileFormStatus} from "../../../enum/ProfileFormStatus";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {BehaviorSubject, Subscription} from "rxjs";
import UserResponseDTO from "../../../interface/user/UserResponseDTO";
import {UserService} from "../../../service/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile-fields',
  templateUrl: './profile-fields.component.html'
})
export class ProfileFieldsComponent implements OnDestroy{
  protected userSubject: BehaviorSubject<UserResponseDTO> = this.authService.userSubject;
  protected userForm: FormGroup = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null),
    firmName: new FormControl(null),
    oldPassword: new FormControl(null),
    newPassword: new FormControl(null),
    passwordConfirm: new FormControl(null),
    newNotificationReceiverMail: new FormControl(null),
    notificationReceiverMails: new FormControl(null),
  });
  protected status:ProfileFormStatus = ProfileFormStatus.READ;
  protected isReadOnly: boolean = true;
  private subscription: Subscription = new Subscription();

  constructor(private userService:UserService, private authService:AuthService, private toastrService:ToastrService) {
    this.subscription = this.userService.getMe().subscribe((response) => {
      this.userForm.patchValue(response.data);
    });
  }

  handleSaveBtnClick(){
    this.userService.updateMe(this.userForm.value, this.userSubject.value.id).subscribe((response) => {
      if(response.statusCode === 200){
        this.userForm.reset();
        this.userForm.patchValue(response.data.user!);
        this.authService.userSubject.next(response.data.user!);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        this.status = ProfileFormStatus.READ;
        this.isReadOnly = true;
        this.toastrService.success('Updated successfully', 'Update',{
          toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-green-500 text-neutral-100',
        });
      } else {
        this.toastrService.error(`Something went wrong: ${response.data.message}`, 'Update',{
          toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-red-500 text-neutral-100',
        });
      }
    });
  }

  handleFormBtnClick(statusToGo:ProfileFormStatus){
    this.isReadOnly = !this.isReadOnly;
    this.status = statusToGo;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  protected readonly ProfileFormStatus = ProfileFormStatus;
}
