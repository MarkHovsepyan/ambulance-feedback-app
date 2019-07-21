import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public radio1;
  public accident = false;
  public input1;
  public input2;
  public input3;
  public input4;
  public title;
  public option1;
  public option2;
  public option3;
  public option4;
  public option5;

  ChronicIssueList: string[] = ['սիրտ-անոթային համակարգի խանգարումներ',
    'գլխուղեղր արյան շրջանառության խանգարումներ',
    'շնչառական համակարգի խանգարումներ',
    'շաքարային դիաբետից առաջացած',
    'չարորակ նորագոյացությունների բարդություններ',
    'հոգեկան հիվանդություն',
    'ծննդաբերություն',
    'այլ հիվանդություններ'
  ];
  selectedChronicIssue: string;

  constructor() {}

  check(id): boolean {
    return id;
  }

  changeRadio(e) {
    console.log(e);
  }

  ngOnInit() {
  }

}
