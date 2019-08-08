import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  public code;
  public phoneSend = false;
  private Person: {[k: string]: any} = history.state.person;

  navigate() {
    this.router.navigateByUrl('/form', { state: {person: this.Person} });
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
