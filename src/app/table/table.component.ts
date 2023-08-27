import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TableDataService } from '../table-data.service'; // Adjust the path
import { User, ApiResponse } from '../table-data.service'; // Adjust the path

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  data: User[] = [];

  constructor(
    private tableDataService: TableDataService,
    private renderer: Renderer2 // Add Renderer2 for DOM manipulation
  ) {}

  @ViewChild('addressColumn', { static: false }) addressColumn!: ElementRef; // Add ViewChild for address column

  ngOnInit() {
    this.fetchData();
    this.showPassword = new Array(this.data.length).fill(false);
  }

  fetchData() {
    this.tableDataService.fetchData().subscribe(
      (response: ApiResponse) => {
        this.data = response.users;
        console.log('Data:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  // Define a method to toggle password visibility
  showPassword: boolean[] = [];

  maskPassword(password: string): string {
    return password.replace(/./g, '*');
  }

  // Create a variable to track whether to show full addresses
  showFullAddresses = false;

  toggleFullAddresses() {
    this.showFullAddresses = !this.showFullAddresses;

    if (this.addressColumn) {
      const addressColumnElement = this.addressColumn.nativeElement;

      if (this.showFullAddresses) {
        // When showing full addresses, add the 'expanded' class for width-fading
        this.renderer.addClass(addressColumnElement, 'expanded');
      } else {
        // When not showing full addresses, remove the 'expanded' class
        this.renderer.removeClass(addressColumnElement, 'expanded');
      }
    }
  }
}