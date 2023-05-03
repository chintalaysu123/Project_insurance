import { Component } from '@angular/core';
import { AppService } from './services/appService/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'insurance';
  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private appService: AppService
  ) {
    this.appService.changeLogInStatus.subscribe(res => {
      this.checkIsLoggedIn(res);
    });
    this.intializeApp();
  }

  intializeApp(): void {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData !== null) {
      this.isLoggedIn = true;
      this.router.navigate(['home']);
    } else {
      this.isLoggedIn = false;
    }
  }

  checkIsLoggedIn(responseData): void {
    console.log(responseData);
    localStorage.setItem('userData', JSON.stringify(responseData));
    this.isLoggedIn = true;
    this.router.navigate(['home']);
  }
}
