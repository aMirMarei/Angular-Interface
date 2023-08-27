import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;
  @ViewChild('menuButton', { static: true }) menuButton!: ElementRef;

  isMenuOpen = false;

  constructor() {}

  toggleSidenav() {
    this.sidenav.toggle();
    this.sidenav.opened = !this.sidenav.opened;
  }

  // ngAfterViewInit() {
  //   // Add event listener to the side menu element itself
  //   this.sidenav._elementRef.nativeElement.addEventListener('mouseenter', () => {
  //     if (!this.sidenav.opened && window.innerWidth >= 992) {
  //       // Only open the side menu if it's not already opened and the screen size is larger than 992px
  //       this.sidenav.open();
  //     }
  //   });
  // }
}