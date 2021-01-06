import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

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
    private router: Router
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


      this.appService.login(body).subscribe((res) => {
        if (res) {
          console.log('res', res);
          this.appService.successMsg(res, 'Success');
          this.router.navigate(['/index-3']);
        }
      }, error => {
        console.log(error);
        this.appService.errorMsg(error.error.errors[0], 'Error');
      });
    }
  }







}
