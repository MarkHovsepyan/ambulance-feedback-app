import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public title;

  private Person: { [k: string]: any };

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
    if (history.state.person) {
      this.Person = history.state.person;
    } else {this.Person = {}; }
  }

  check(id): boolean {
    return id;
  }

  navigate() {
    if (this.Person.wasAccident) {
      if (this.Person.selectedChronicIssue) {
        delete this.Person.selectedChronicIssue;
      }
      if (this.Person.symptomOne) {
        delete this.Person.symptomOne;
      }
      if (this.Person.symptomTwo) {
        delete this.Person.symptomTwo;
      }
      if (this.Person.symptomThree) {
        delete this.Person.symptomThree;
      }
      if (this.Person.symptomFour) {
        delete this.Person.symptomFour;
      }
      if (this.Person.symptomFive) {
        delete this.Person.symptomFive;
      }
    }
    this.router.navigateByUrl('/form2', {state: {person: this.Person}});
  }

}
