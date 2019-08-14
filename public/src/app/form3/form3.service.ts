import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Form3Component} from './form3.component';

class Person {
  // public formData: Form3Component = new Form3Component();
  // name: this.formData.Person;
}

@Injectable()
class DataService {


  // private person: object = this.formData.Person;
  //
  // constructor(private http: HttpClient) {}
  //
  // getCat(name: string): Observable<Person> {
  //   return this.http.get<person>('http://localhost:8000/api/cats/' + name)
  // }
  //
  // insertCat(cat: Cat): Observable<Cat> {
  //   return this.http.post<Cat>('http://localhost:8000/api/cats/', cat)
  // }
  //
  // updateCat(cat: Cat): Observable<void> {
  //   return this.http.put<void>(
  //     'http://localhost:8000/api/cats/' + cat.name,
  //     cat
  //   )
  // }
  //
  // deleteCat(name: string) {
  //   return this.http.delete('http://localhost:8000/api/cats/' + name)
  // }
}
