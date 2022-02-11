import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-adherence',
  templateUrl: './navbar-adherence.component.html',
  styleUrls: ['./navbar-adherence.component.scss','../../../node_modules/bootstrap/scss/bootstrap.scss']
})
export class NavbarAdherenceComponent implements OnInit {

  idTab: any = "profile";

  constructor() { }

  ngOnInit() {
  }
  openTab(ids:any) {
    this.idTab = ids;
  }
}
