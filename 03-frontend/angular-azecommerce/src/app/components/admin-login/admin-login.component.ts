import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MyCustomValidators } from 'src/app/validators/my-custom-validators';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  storage: Storage = sessionStorage;

  adminFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService
              ) { }

  ngOnInit(): void {
    this.adminFormGroup = new FormGroup({
      securityKey: new FormControl('', [Validators.required, MyCustomValidators.notOnlyWhitespace]),
      password: new FormControl('', [Validators.required, MyCustomValidators.notOnlyWhitespace]),
  })
  }

  getSecurityKey(): string{
    return this.adminFormGroup.controls['securityKey'].value;
  }

  getPassword(): string{
    return this.adminFormGroup.controls['password'].value;
  }

  onSubmit(){
    let securityKey = this.getSecurityKey();
    let password = this.getPassword();


    if (securityKey !== '' && password !== ''){
      let wrongCredentialsFlag = true;
      if (securityKey === "ABCDx9876" && password === "adminAZSM@22"){
          console.log("Here comes the admin!");
          this.loginService.setIsAdmin();
          this.loginService.setIsLoggedIn();
          this.router.navigateByUrl("/products");
      }
      else {
        alert(`Wrong credentials!\nThis page is for admin only\nPlease try again or go back to users login!`);
      }
    }
    else {
      alert(`Insert the credentials!`);
    }
  }

}
