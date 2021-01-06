import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]], 
      firstName: ['', [Validators.required]], 
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      identity: ['', [Validators.required]],
    })
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  onRegister() {
    console.log('this.registerForm.controls', this.registerForm.controls);
    this.submitted = true;
    if (this.registerForm.valid) {
      const body = {
        email: this.registerForm.controls.email.value,
        userName: this.registerForm.controls.userName.value,
        password: this.registerForm.controls.password.value,
        surname: this.registerForm.controls.lastName.value,
        givenName: this.registerForm.controls.firstName.value,
        address: this.registerForm.controls.address.value,
        phoneNumber: this.registerForm.controls.phone.value,
        idNumber: this.registerForm.controls.identity.value,
        gender: this.registerForm.controls.gender.value,
      }
      console.log('body', body);
      // this.appService.getConfig(body).subscribe((res) => {
        
      // });
    }
  }

}
