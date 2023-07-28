import {Component, Input} from '@angular/core';
import {Firm} from "../../model/Firm";
import {AuthService} from "../../service/auth.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../../model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-firm-item',
  templateUrl: './firm-item.component.html'
})
export class FirmItemComponent {
  protected selected: boolean = false;
  protected switchSubject: BehaviorSubject<boolean> = this.authService.switchSubject;

  constructor(private authService: AuthService) {
    this.selected = this.switchSubject.value;
  }

  @Input() firm!: Firm;

  onFirmSelect() {
    this.selected = !this.selected;
    if (this.selected) {
      this.authService.impersonate(this.firm.id).subscribe();
    } else {
      this.authService.exitImpersonate()
    }
  }
}
