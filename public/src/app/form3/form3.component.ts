import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {
  public Person: {[k: string]: any} = history.state.person;

  sendData() {
    console.log(this.Person);
  }

  constructor() { }

  ngOnInit() {
  }

}

export class User {
  private formData = new Form3Component();
  private person = this.formData.Person;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  // getName(): string {
  //   return this.name;
  // }
}

