import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {Pot} from "../../../../model/Pot";
import {EmailListener} from "../../../../interface/EmailListener";
import {GenericResponse} from "../../../../interface/GenericResponse";
import {EmailListenerStatus} from "../../../../enum/EmailListenerStatus";
import {ToastrService} from "ngx-toastr";
import {PotService} from "../../../../service/pot.service";
import {Firm} from "../../../../model/Firm";

@Component({
  selector: 'app-email-pot-settings',
  templateUrl: './email-pot-settings.html',
})
export class EmailPotSettings implements OnInit,OnDestroy {
  private firm: Firm = JSON.parse(localStorage.getItem("user") || '{}')?.firm;
  protected emailListenerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  protected emailListeners: Observable<GenericResponse<EmailListener[]>> = new Observable<GenericResponse<EmailListener[]>>();
  private subscription: Subscription = new Subscription();

  @Input() pot!: Pot;
  @Output() emailSettingsCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private toastrService: ToastrService, private potService: PotService) {}

  onEmailListenerAdd() {
    this.subscription = this.potService.addEmailListener(
      this.pot.id,
      this.emailListenerForm.value.email,
      this.emailListenerForm.value.password)
    .subscribe({
      next: () => {
        this.toastrService.success('Email listener added successfully', 'Listener Success', {
          toastClass: 'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-green-500 text-neutral-100'
        });
        setTimeout(() => {
          this.emailSettingsCloseEvent.emit(true);
        }, 500)
        this.emailListenerForm.reset();
      },
      error: () => {
        this.toastrService.error('Email listener could not added. Check your credentials!', 'Listener Failure', {
          toastClass: 'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-red-500 text-neutral-100'
        });
      }
    });
  }

  onEmailSettingsCloseClick() {
    this.emailSettingsCloseEvent.emit(true);
  }

  onMailListenerToggleStatus(emailListener: EmailListener) {
    this.subscription = this.potService.updateEmailListener(
      this.pot.id,
      emailListener).subscribe({
      next: () => {
        this.toastrService.success('Email listener status changed successfully', 'Success', {
          toastClass: 'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-green-500 text-neutral-100'
        });
        setTimeout(() => {
          this.emailSettingsCloseEvent.emit(true);
        }, 500)
        this.emailListenerForm.reset();
      },
      error: () => {
        this.toastrService.error('Email listener status could not changed!', 'Failure', {
          toastClass: 'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-red-500 text-neutral-100'
        });
      }
    });
  }

  onMailListenerDeleteClick(emailListener: EmailListener) {
    this.subscription = this.potService.deleteEmailListener(
      this.pot.id,
      emailListener.id).subscribe({
      next: () => {
        this.toastrService.success('Email listener deleted successfully', 'Success', {
          toastClass: 'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-green-500 text-neutral-100'
        });
        setTimeout(() => {
          this.emailSettingsCloseEvent.emit(true);
        }, 500)
        this.emailListenerForm.reset();
      },
      error: () => {
        this.toastrService.error('Email listener could not deleted!', 'Failure', {
          toastClass: 'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-red-500 text-neutral-100'
        });
      }
    });
  }

  onSetupClick() {
    this.potService.setupPot(this.pot.id).subscribe();
  }

  ngOnInit():void{
    this.emailListeners = this.potService.getEmailListeners(this.pot.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected readonly EmailListenerStatus = EmailListenerStatus;
}
