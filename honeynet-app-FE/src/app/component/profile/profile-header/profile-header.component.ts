import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import UserResponseDTO from "../../interface/user/UserResponseDTO";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html'
})
export class ProfileHeaderComponent {
  protected userSubject: BehaviorSubject<UserResponseDTO> = this.authService.userSubject;
  constructor(private authService:AuthService) {}
}
