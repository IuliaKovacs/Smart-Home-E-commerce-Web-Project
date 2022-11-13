import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';
import { MyCustomValidators } from 'src/app/validators/my-custom-validators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  storage: Storage = sessionStorage;

  loginFormGroup: FormGroup;

  users: User[] = [];

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private registerService: RegisterService,
              private router: Router) {    
  }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      emailAddress: new FormControl('', [Validators.required, MyCustomValidators.notOnlyWhitespace, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, MyCustomValidators.notOnlyWhitespace, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*]).{8,}$')]),
  })
  
  }

  getEmailAddress(): string{
    return this.loginFormGroup.controls['emailAddress'].value;
  }

  getPassword(): string{
    return this.loginFormGroup.controls['password'].value;
  }

  onSubmit(){
    //console.log("Handling user login");
    //console.log(this.loginFormGroup.value);

    let email = this.getEmailAddress();
    let password = this.getPassword();

    //get all the users
    this.loginService.getUsers().subscribe(data => {
      this.users = data;
    });

    //console.log(this.users);

    if (email !== '' && password !== ''){
      let wrongCredentialsFlag = true;
      for (let user of this.users){
        if (user.emailAddress === email && user.password === this.registerService.encriptPassword(password)){
          this.retainUserDetails();
          this.loginService.setIsLoggedIn();
          console.log("Login with success!")
          //alert(`Thank you for logging in`);
          wrongCredentialsFlag = false;
          this.router.navigateByUrl("/products");
        }
      }  

      if (wrongCredentialsFlag == true){
        alert(`Wrong email or password!\nPlease try again!`);
      }
    }
    else {
      alert(`Insert the credentials!`);
    }
  }

  retainUserDetails(){
    // retrieve the user's email from authentication response
    const theEmail = this.getEmailAddress();

    console.log(theEmail);

    // now store the email in browser storage
    this.storage.setItem('userEmail', JSON.stringify(theEmail));
  }



}

