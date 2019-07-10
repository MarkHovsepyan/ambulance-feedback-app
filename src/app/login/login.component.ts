import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public name;
  public lastName;
  public ambId;

  constructor() { }

  ngOnInit() {
  }

  check(id): boolean {
    return id;
  }

}
