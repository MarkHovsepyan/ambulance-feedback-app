import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public radio1;
  public input1;
  public input2;
  public input3;
  public input4;
  constructor() { }

  check(id): boolean {
    return id;
  }

  ngOnInit() {
  }

}
