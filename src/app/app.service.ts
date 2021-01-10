import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



// const environment = 'http://128.199.89.67/api/v1';
const environment = 'https://www.genson.me/api/v1'; 

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
  createOrder(body) {
    const userToken = localStorage.getItem('token');
    console.log('userToken', userToken);
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer ' + userToken
        })
    };
    const url = `${environment}/transaction-history`;
    return this.http.post(url, body, httpOptions);
  }
  getAllProduct() {
    const url = `${environment}/u/product`;
    return this.http.get(url);
  }
  getProduct(code) {
    const url = `${environment}/u/product/${code}`;
    return this.http.get(url);
  }


}