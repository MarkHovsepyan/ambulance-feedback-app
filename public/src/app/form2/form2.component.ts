import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  timeList: string[] = [
    'չի գերազանցում 15 րոպե',
    'չի գերազանցում 20 րոպե',
    'գերազանցում է 20 րոպե'
  ];
  private Person: {[k: string]: any};

  constructor(private router: Router) {
    if (history.state.person) {
      this.Person = history.state.person;
    } else {this.Person = {}; }
  }

  navigate() {
    if (this.Person.totalRating != null && this.Person.waitingTime && this.Person.serviceQuestion_1 &&
      this.Person.serviceQuestion_2 && this.Person.serviceQuestion_3) {
      this.router.navigateByUrl('/form3', { state: {person: this.Person} });
    }
  }

  goBack() {
    this.router.navigateByUrl('/form', { state: {person: this.Person} });
  }

}
