import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public person;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const personCard = Array.from(document.getElementsByClassName(`${this.person.userId}`));
    // personCard[0].getElementsByTagName("IMG")[0].setAttribute("src", `https://api.digital.dvlp.delen.be/api/images/contactPersons?emailAddress=${this.person.emailAddress}`);
  }
}
