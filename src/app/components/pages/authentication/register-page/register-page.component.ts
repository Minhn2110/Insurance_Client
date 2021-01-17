import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { RegisterPartnerModel } from './register-page.model';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  registerPartnerForm: FormGroup;
  submitted = false;
  isClientRegister: Boolean = true;

  registerPartnerFormBuilder: Array<any> = [
    {title: 'Account', input: [
      { class: "col-4", type: 'text', formControlName: 'username', placeholder: 'User Name', error: 'User Name', hint: 'User Name' },
      { class: "col-4", type: 'password', formControlName: 'password', placeholder: 'Password', error: 'Password', hint: 'Password' },
    ]},
    {title: 'Partner Info', input: [
      { class: "col-4", type: 'text', formControlName: 'name', placeholder: 'Name', error: 'Name', hint: 'Name' },
      { class: "col-4", type: 'text', formControlName: 'code', placeholder: 'Code', error: 'code', hint: 'code' },
      { class: "col-4", type: 'email', formControlName:'email', placeholder: 'Email', error: 'Email', hint: 'Email' },
      { class: "col-4", type: 'number', formControlName: 'phoneNumber', placeholder: 'Phone Number', error: 'Phone Number', hint: 'Phone Number' },
      { class: "col-4", type: 'number', formControlName: 'contact', placeholder: 'Company Contact', error: 'Company Contact', hint: 'Company Contact' },
      { class: "col-4", type: 'number', formControlName: 'hotline', placeholder: 'Hotline', error: 'Hotline', hint: 'Hotline' },
      { class: "col-4", type: 'text', formControlName: 'address', placeholder: 'Address', error: 'Address', hint: 'Address' },
    ]},
  ]

  registerClientFormBuilder: Array<any> = [
    {title: 'Account', input: [
      { class: "col-4", type: 'text', formControlName: 'username', placeholder: 'User Name', error: 'User Name', hint: 'User Name' },
      { class: "col-4", type: 'password', formControlName: 'password', placeholder: 'Password', error: 'Password', hint: 'Password' },
    ]},
    {title: 'Personal Info', input: [
      { class: "col-4", type: 'text', formControlName: 'givenName', placeholder: 'First Name', error: 'First Name', hint: 'First Name' },
      { class: "col-4", type: 'text', formControlName: 'surname', placeholder: 'Last Name', error: 'Last Name', hint: 'Last Name' },
      { class: "col-4", type: 'email', formControlName:'email', placeholder: 'Email', error: 'Email', hint: 'Email' },
      { class: "col-4", type: 'number', formControlName: 'phoneNumber', placeholder: 'Phone Number', error: 'Phone Number', hint: 'Phone Number' },
      { class: "col-4", type: 'text', formControlName: 'address', placeholder: 'Address', error: 'Address', hint: 'Address' },
      // { class: "col-4", type: 'text', formControlName: 'gender', placeholder: 'Gender', error: 'Gender', hint: 'Gender' },
      { class: "col-4", type: 'text', formControlName: 'idNumber', placeholder: 'Identity', error: 'Identity', hint: 'Identity' },
    ]},
  ]

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initClientRegisterForm();
    this.initPartnerRegisterForm();
  }

  initClientRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      // Personal Info
      givenName: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      // gender: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
    })
  }
  initPartnerRegisterForm() {
    this.registerPartnerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      hotline: ['', [Validators.required]],
    })
  }
  onRegisterPartner() {
    this.submitted = true;
    if (this.registerPartnerForm.valid) {
      const body = {
        username: this.registerPartnerForm.controls.username.value,
        password: this.registerPartnerForm.controls.password.value,
        name: this.registerPartnerForm.controls.name.value,
        code: this.registerPartnerForm.controls.code.value,
        email: this.registerPartnerForm.controls.email.value,
        address: this.registerPartnerForm.controls.address.value,
        phoneNumber: this.registerPartnerForm.controls.phoneNumber.value,
        contact: this.registerPartnerForm.controls.contact.value,
        hotline: this.registerPartnerForm.controls.hotline.value,
        avatarImage: 'ád', 
        appellation: 'Mr'
      }
      console.log('body', body);
      // this.router.navigate(['/register-otp']);


      this.appService.registerPartner(body).subscribe((res) => {
        if (res) {
          this.appService.successMsg('We will contact with you soon', 'Success');
        }
      }, error => {
        console.log(error);
        this.appService.errorMsg(error.error.errors[0], 'Error');
      });
    }
  }

  get registerClientFormControl() {
    return this.registerForm.controls;
  }
  get registerPartnerFormControl() {
    return this.registerPartnerForm.controls;
  }
  onRegister() {
    this.submitted = true;
    if (this.registerForm.valid) {
      const body = {
        username: this.registerForm.controls.username.value,
        password: this.registerForm.controls.password.value,

        surname: this.registerForm.controls.surname.value,
        givenName: this.registerForm.controls.givenName.value,
        email: this.registerForm.controls.email.value,
        address: this.registerForm.controls.address.value,

        phoneNumber: this.registerForm.controls.phoneNumber.value,
        idNumber: this.registerForm.controls.idNumber.value,
        gender: 0,
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
          phoneNumber: this.registerForm.controls.phoneNumber.value,
          code: result.value
        }
        this.appService.sendOtp(body).subscribe((res: any) => {
          if (res) {
            console.log('res', res);
            Swal.fire('Register Success', '', 'success');
            this.router.navigate(['/']);
          }
        })
      }
    })
  }
  onChangeRegisterRole(event) {
    if (event.target.value == 'client') {
      this.isClientRegister = true;
    } else {
      this.isClientRegister = false;
    }
    console.log('event', event.target.value);
  }




}
