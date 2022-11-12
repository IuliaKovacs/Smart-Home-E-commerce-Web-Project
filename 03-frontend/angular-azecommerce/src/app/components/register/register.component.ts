import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { RegisterService } from 'src/app/services/register.service';
import { MyCustomValidators } from 'src/app/validators/my-custom-validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterService,
              private router: Router) { 
                
              }

  ngOnInit(): void {

    this.registerFormGroup = new FormGroup({
      emailAddress: new FormControl('', [Validators.required, MyCustomValidators.notOnlyWhitespace, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      username: new FormControl('', [Validators.required, Validators.minLength(4), MyCustomValidators.notOnlyWhitespace]),
      password1: new FormControl('', [Validators.required, MyCustomValidators.notOnlyWhitespace, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*]).{8,}$')]),
  })
    

  }

 

  onSubmit(){
    console.log("Handling user register");
    console.log(this.registerFormGroup.value);

    this.registerFormGroup.markAllAsTouched();
    

    let user = new User();
    
    user.emailAddress = this.registerFormGroup.controls['emailAddress'].value;
    user.username = this.registerFormGroup.controls['username'].value;
    user.password = this.registerFormGroup.controls['password1'].value;

    let encriptedPassword = this.registerService.encriptPassword(user.password);
    
    // console.log(encriptedPassword);

    user.password = encriptedPassword;

    if (user.password !== '' && user.emailAddress !== '' && user.username !== ''){
      this.registerService.register(user).subscribe({
        next: response => {
          alert(`Thank you for registering`);
          this.router.navigateByUrl("/login");
        },
        error: err => {
          alert(`There was an error: ${err.message}`);
        }
      }
      );
    }
    else {
      alert(`Insert the credentials!`);
    }


    

  }

}
