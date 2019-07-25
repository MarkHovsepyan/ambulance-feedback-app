import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private Person: object = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  check(id): boolean {
    return id;
  }

  navigate() {
    console.log(this.Person);
    this.router.navigateByUrl('/sms', { state: {person: this.Person}  });
  }

}
