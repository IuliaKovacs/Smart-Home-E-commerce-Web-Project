import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      password2: new FormControl('', [Validators.required, MyCustomValidators.notOnlyWhitespace, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*]).{8,}$')])
  })
    

  }

 




  onSubmit(){
    console.log(this.registerFormGroup.value);

    if (this.registerFormGroup.invalid) {
      this.registerFormGroup.markAllAsTouched();
    }

  }

}
