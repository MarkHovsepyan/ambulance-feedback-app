import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  public code;
  public phoneSend = false;
  private Person: {[k: string]: any};

  // Validation check
  phoneNumberFormControl = new FormControl('', [
    Validators.required
  ]);

  phoneNumberError = new MyErrorStateMatcher();

  smsFormControl = new FormControl('', [
    Validators.required
  ]);

  smsError = new MyErrorStateMatcher();

  sendingPhoneNumber() {
    if (this.phoneNumberFormControl.valid) {
      this.phoneSend = !this.phoneSend;
    }
  }

  navigate() {
    if (this.smsFormControl.valid) {
      this.router.navigateByUrl('/form', { state: {person: this.Person} });
    }
  }

  constructor(private router: Router) {
    if (history.state.person) {
      this.Person = history.state.person;
    }
  }

  ngOnInit() {
  }

}
