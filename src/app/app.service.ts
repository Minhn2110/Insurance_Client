import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



// const environment = 'http://128.199.89.67/api/v1';
const environment = 'http://www.genson.me';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient,
    private toastr: ToastrService

    ) {

  }

  getConfig(body) {
    const url = `${environment}/auth/u/register`;
    return this.http.post(url, body);
  }
  login(body) {
    const url = `${environment}/auth/authenticate`;
    return this.http.post(url, body);
  }
  sendOtp(otpcode) {
    const url = `${environment}/auth/verify`;
    return this.http.post(url, otpcode);
  }
  errorMsg(msg, title) {
    this.toastr.error(msg, title);
  }
  successMsg(msg, title) {
    this.toastr.info(msg, title);
  }


}