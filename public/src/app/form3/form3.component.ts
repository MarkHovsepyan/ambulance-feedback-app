import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component {
  public Person: {[k: string]: any};

  sendData() {
    console.log(this.Person);
  }

  goBack() {
    this.router.navigateByUrl('/form2', { state: {person: this.Person} });
  }

  constructor(private router: Router) {
    if (history.state.person) {
      this.Person = history.state.person;
    } else {this.Person = {}; }
  }

}

export class User {
  // private formData = new Form3Component();
  // private person = this.formData.Person;
  //
  // constructor(obj?: any) {
  //   Object.assign(this, obj);
  // }
}

