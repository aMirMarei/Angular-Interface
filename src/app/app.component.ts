import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any[] = [];

  //property for checking the sidebar
  isSidebarOpen: boolean = false;

  isResponsive: boolean = false;

  constructor() {}


}
