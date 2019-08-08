import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private Person: {[k: string]: any} = {};
  private isPopupOpen = false;

  private itemList = [];
  public selectedItemId: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.itemList = [
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '10:08:2019 20:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '02:08:2019 10:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '01:08:2019 21:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '18:07:2019 22:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '11:07:2019 12:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '10:07:2019 13:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '07:07:2019 09:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '02:07:2019 18:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '01:07:2019 19:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '19:06:2019 18:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '11:06:2019 20:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '05:06:2019 22:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '15:05:2019 23:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '10:05:2019 21:30'},
      {id: 102010, F_name: 'Վարազդատ', L_name: 'Մամիկոնյան', date: '17:04:2019 04:30'},
    ];
  }

  check(id): boolean {
    return id;
  }

  openPopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  selectItem(index) {
    this.selectedItemId = index;
  }

  navigate() {
    console.log(this.Person);
    this.router.navigateByUrl('/sms', { state: {person: this.Person}  });
  }

}
