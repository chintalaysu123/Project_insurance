import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/apiService/api-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  customerId: Number;
  firstName: String;
  lastName: String;
  email: String;
  age: String;
  address: String;
  phone: String;
  message: String;
  insuranceType: String;
  displayLetter: String;

  constructor(
    private apiService: ApiServiceService
  ) {
    let customerData = localStorage.getItem('userData');
    let data = JSON.parse(customerData);
    this.customerId = data['userId'];
  }

  ngOnInit(): void {
    this.apiService.getUserDetails(this.customerId).subscribe(response => {
      console.log(response);
      this.firstName = response.firstname;
      this.lastName = response.lastname;
      this.email = response.email;
      this.age = response.age;
      this.address = response.address;
      this.phone = response.phone;
      this.insuranceType = response.insurancetype;
      this.message = response.message;
      this.displayLetter = this.firstName.charAt(0).toUpperCase() + this.lastName.charAt(0).toUpperCase();
    }, err => {
      window.alert('Unable to fetch data');
      console.log(err);
    });
  }

}
