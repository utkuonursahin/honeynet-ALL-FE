import {Component, Input} from '@angular/core';
import {Firm} from "../../model/Firm";
import {AuthService} from "../../service/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-firm-item',
  templateUrl: './firm-item.component.html'
})
export class FirmItemComponent {
  protected switchSubject: BehaviorSubject<boolean> = this.authService.switchSubject;

  constructor(private authService: AuthService) {}

  @Input() firm!: Firm;

  onFirmSelect() {
    if (this.switchSubject.value) {
      this.authService.exitImpersonate()
    } else {
      this.authService.impersonate(this.firm.id).subscribe();
    }
  }
}
