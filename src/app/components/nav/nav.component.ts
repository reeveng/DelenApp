import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  private menuVisbile: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuVisbile = !this.menuVisbile;
    if (this.menuVisbile) document.getElementsByClassName("popup-menu")[0].classList.add("menu-visible");
    if (!this.menuVisbile) document.getElementsByClassName("popup-menu")[0].classList.remove("menu-visible");
  }
}
