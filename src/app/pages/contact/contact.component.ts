import { ContactService } from './../../services/contact.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

enum ContactPersonType {
  manager = 1,
  agent = 2,
  patrimonialAdvisor = 3,
  successionAdvisor = 4,
  fiscalAdvisor = 5,
}

enum Type {
  person = 1,
  contract = 2,
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public loadingError$ = this._contactService.loadingError$;
  private _fetchContracts$ = this._contactService.contracts$;
  private _fetchPersons$ = this._contactService.persons$;

  public persons = [];

  constructor(private _contactService: ContactService) { }

  ngOnInit(): void {
    forkJoin([
      this._fetchContracts$.pipe(map((list) => {
        list.contactPersons.forEach(listElement => listElement.t = "contract");
        return list.contactPersons;
      })),
      this._fetchPersons$.pipe(map((list) => {
        list.contactPersons.forEach(listElement => listElement.t = "person");
        return list.contactPersons;
      }))
    ]).subscribe(list => {
      this.persons.push(...list[0], ...list[1]);
      this.persons.sort((a, b) => {
        let numA: number = parseInt(ContactPersonType[a.contactPersonType]), numB: number = parseInt(ContactPersonType[b.contactPersonType]);
        if (numA == numB) {
          let typA: number = parseInt(Type[a.t]), typB: number = parseInt(Type[b.t]);
          if (numA == 1 && numB == 1 && typA != typB) {
            return typA - typB;
          }
          if (a.lastName < b.lastName) { return -1; }
          if (a.lastName > b.lastName) { return 1; }
          return 0;
        }
        return numA - numB;
      });
      this.persons = this.persons.reduce((unique, item) => {
        let isUnique = true;
        unique.forEach(person => {
          if (person.userId == item.userId) {
            isUnique = false;
          }
        });
        return isUnique ? [...unique, item] : unique;
      }, []);
    });
  }
}
