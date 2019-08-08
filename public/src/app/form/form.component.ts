import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public accident = false;
  public title;

  private Person: {[k: string]: any}  = history.state.person;

  ChronicIssueList: string[] = ['սիրտ-անոթային համակարգի խանգարումներ',
    'գլխուղեղր արյան շրջանառության խանգարումներ',
    'շնչառական համակարգի խանգարումներ',
    'շաքարային դիաբետից առաջացած',
    'չարորակ նորագոյացությունների բարդություններ',
    'հոգեկան հիվանդություն',
    'ծննդաբերություն',
    'այլ հիվանդություններ'
  ];

  constructor(private router: Router) {
  }

  check(id): boolean {
    return id;
  }

  navigate() {
    this.Person.wasAccident = this.accident;
    this.router.navigateByUrl('/form2', { state: {person: this.Person} });
  }

  ngOnInit() {
  }

}
