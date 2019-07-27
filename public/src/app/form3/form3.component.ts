import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {
  private Person: object = history.state.person;

  sendData() {
    console.log(this.Person);
  }

  constructor() { }

  ngOnInit() {
  }

}
