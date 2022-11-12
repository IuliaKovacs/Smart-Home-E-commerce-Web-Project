import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { LoginService } from 'src/app/services/login.service';
import { MyCustomValidators } from 'src/app/validators/my-custom-validators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  users: User[] = [];

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router) { 
      
    }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      emailAddress: new FormControl('', [Validators.required, MyCustomValidators.notOnlyWhitespace, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, MyCustomValidators.notOnlyWhitespace, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*]).{8,}$')]),
  })
  
  }

  onSubmit(){
    //console.log("Handling user login");
    //console.log(this.loginFormGroup.value);

    let email = this.loginFormGroup.controls['emailAddress'].value;
    let password = this.loginFormGroup.controls['password'].value;

    //get all the users
    this.loginService.getUsers().subscribe(data => {
      this.users = data;
    });

    //console.log(this.users);

    if (email !== '' && password !== ''){
      for (let user of this.users){
        if (user.emailAddress === email && user.password === password){
          console.log("Login with success!")
          //alert(`Thank you for logging in`);
          this.router.navigateByUrl("/products");
        }
      }  
    }
    else {
      alert(`Insert the credentials!`);
    }
    
    
  
  }



}

