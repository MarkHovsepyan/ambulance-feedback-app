import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  selectedWaitingTime: string;
  timeList: string[] = [
    'չի գերազանցում 15 րոպե',
    'չի գերազանցում 20 րոպե',
    'գերազանցում է 20 րոպե'
  ];
  public radioGroup3: string;
  public radioGroup4: string;
  public radioGroup5: string;
  constructor() { }

  ngOnInit() {
  }

}
