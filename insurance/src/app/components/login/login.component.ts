import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/apiService/api-service.service';
import { AppService } from 'src/app/services/appService/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  isLogin = true;
  username: String;

  constructor(
    private formBuilder: FormBuilder,
    public apiService: ApiServiceService,
    private appService: AppService,
  ) {
    this.username = '';
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    document.getElementById('sign-in-form')['noValidate'] = false;
    document.getElementById("signup").style.display = "none";
    document.getElementById('password').style.display = "none";
    document.getElementById('update-password').style.display = "none";
    document.getElementById('login-button').style.display = "none";
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  activateRegisterForm() {
    document.getElementById("login").style.display = "none";
    document.getElementById('update-password').style.display = "none";
    document.getElementById("signup").style.display = "block";
    document.getElementById('sign-up-form')['noValidate'] = false;
  }

  showLoginForm() {
    document.getElementById("signup").style.display = "none";
    document.getElementById('update-password').style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById('sign-in-form')['noValidate'] = false;
  }

  verifyEmail() {
    let username = document.getElementById('username-input')['value'].toString();
    if (username.length > 0) {
      let body = {
        email: username.toString()
      }
      this.apiService.checkMail(body).subscribe((res) => {
        console.log(res);
        let passwordData = res.data.isPasswordChanged;
        if (!passwordData) {
          this.username = username;
          document.getElementById('login').style.display = "none";
          document.getElementById('update-password').style.display = "block";
          document.getElementById('update-password-form')['noValidate'] = false;
        } else {
          document.getElementById('proceed-button').style.display = "none";
          document.getElementById('password').style.display = "block";
          document.getElementById('login-button').style.display = "inline-block"
        }
      });
    } else {
      window.alert('Username cannot be empty, Please enter a valid email');
    }
  }

  updatePassword() {
    let updatePassword = document.getElementById('update-username-input')['value'].toString();
    let confirmPassword = document.getElementById('confirm-password-input')['value'].toString();
    if (updatePassword.length > 0 && confirmPassword.length > 0 && updatePassword === confirmPassword) {
      this.apiService.getCustomerData(this.username).subscribe((res) => {
        let customerId = res.customerId;
        let data = {
          'customerId': customerId,
          'password': updatePassword
        };
        this.apiService.updatePassowrd(data).subscribe((res) => {
          window.alert('Password updated Successfully, Please Login now');
          document.getElementById("signup").style.display = "none";
          document.getElementById('update-password').style.display = "none";
          document.getElementById("login").style.display = "block";
        });
      });
    } else {
      window.alert('Please enter same password in confirm password');
    }
  }

  performLogin() {
    let username = document.getElementById('username-input')['value'].toString();
    let password = document.getElementById('password-input')['value'].toString();
    if (password.length > 0) {
      let body = {
        email: username.toString(),
        password: password.toString()
      }
      this.apiService.login(body).subscribe((res) => {
        console.log(res);
        window.alert('Successfully Logged In as ' + username);
        this.appService.changeLogInStatus.next(res);
      });
    } else {
      window.alert('Password cannot be empty, Please enter a valid email');
    }
  }

  createUser() {
    let firstName = document.getElementById('firstname-input')['value'].toString();
    let lastName = document.getElementById('lastname-input')['value'].toString();
    let address = document.getElementById('address-input')['value'].toString();
    let age = parseInt(document.getElementById('age-input')['value']);
    let email = document.getElementById('email-input')['value'].toString();
    let phoneNumber = document.getElementById('phone-number-input')['value'].toString();
    let insuranceType = document.getElementById('insurance-type-select')['value'].toString();
    let message = document.getElementById('message-input')['value'];
    let body = {
      "firstname": firstName,
      "lastname": lastName,
      "address": address,
      "age": age,
      "email": email,
      "phone": phoneNumber,
      "insurancetype": insuranceType,
      "message": message
    };
    this.apiService.createUser(body).subscribe((res) => {
      console.log(res);
      window.alert('Successfully created the user ' + email);
    });
  }

}
