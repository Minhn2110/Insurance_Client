import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppService } from 'src/app/app.service';

import {LOAD_USER_INFO, accountAction} from '../../../store/store.action';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]], 
      password: ['', [Validators.required]],
    })
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const body = {
        username: this.loginForm.controls.userName.value,
        password: this.loginForm.controls.password.value,
      }
      console.log('body', body);


      this.appService.login(body).subscribe((res: any) => {
        if (res) {
          console.log('res', res);
          localStorage.setItem('token', res.accessToken);
          localStorage.setItem('userInfo', JSON.stringify(res.infor));
          this.store.dispatch(LOAD_USER_INFO({userInfo: res.infor}));
          this.store.dispatch(accountAction({accountStatus: true}));
          this.appService.successMsg('Log in success', 'Success');
          this.router.navigate(['/']);
        }
      }, error => {
        console.log(error);
        this.appService.errorMsg(error.error.errors[0], 'Error');
      });
    }
  }







}
