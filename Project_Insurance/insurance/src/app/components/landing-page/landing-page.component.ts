import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  currentPage: String;

  constructor() {
    this.currentPage = 'InfoPage';
  }

  ngOnInit(): void {
  }

  goToLogin(): void {
    this.currentPage = 'LoginPage';
  }

  goToQuote(): void {
    this.currentPage = 'QuotePage';
  }

}
