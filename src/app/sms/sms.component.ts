import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  public code;
  public phone;
  public phoneSend = false;

  constructor() { }

  ngOnInit() {
  }

}
