import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
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
        username: this.registerForm.controls.userName.value,
        password: this.registerForm.controls.password.value,
        surname: this.registerForm.controls.lastName.value,
        givenName: this.registerForm.controls.firstName.value,
        address: this.registerForm.controls.address.value,
        phoneNumber: this.registerForm.controls.phone.value,
        idNumber: this.registerForm.controls.identity.value,
        gender: this.registerForm.controls.gender.value,
      }
      console.log('body', body);
      // this.router.navigate(['/register-otp']);


      this.appService.getConfig(body).subscribe((res) => {
        if (res) {
          this.onOtp();
          // this.appService.errorMsg(res, 'Success');
        }
      }, error => {
        console.log(error);
        this.appService.errorMsg(error.error.errors[0], 'Error');
      });
    }
  }
  onOtp() {
    Swal.fire({
      title: 'OTP Code',
      input: 'text',
      inputPlaceholder: 'Please enter OTP Code',
      inputAttributes: {
        autocapitalize: 'off'
      },
      buttonsStyling: false,
      confirmButtonText: 'Send',
      showLoaderOnConfirm: true,
      customClass: {
        confirmButton: 'default-btn register'
      },
      inputValidator: (value) => {
        if (!value) {
          return 'Please enter OTP Code!'
        }
      }
  }).then((result) => {
    console.log('result', result);
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      const body = {
        phoneNumber: this.registerForm.controls.phone.value,
        code: result.value
      }
      this.appService.sendOtp(body).subscribe((res) => {
        if(res) {
          Swal.fire('Register Success', '', 'success');
          this.router.navigate(['/index-3']);
        }
      })
    }
  })
}
}
