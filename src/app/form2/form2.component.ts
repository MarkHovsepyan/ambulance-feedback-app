import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  timeList: string[] = [
    'չի գերազանցում 15 րոպե',
    'չի գերազանցում 20 րոպե',
    'գերազանցում է 20 րոպե'
  ];
  private Person: object = history.state.person;

  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigateByUrl('/form3', { state: {person: this.Person} });
  }

  ngOnInit() {
  }

}
