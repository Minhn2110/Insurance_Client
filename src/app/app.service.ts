import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';



// const environment = 'http://128.199.89.67/api/v1';
const environment = 'https://www.genson.me/api/v1'; 

const API_ClaimConfig = `${environment}/configs/claim`;
const API_CarConfig = `${environment}/configs/car`;
const API_Claim = `${environment}/claims`;


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
  registerPartner(body) {
    const url = `${environment}/auth/partner/register`;
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


  // claim
  createClaim(body) {
    const userToken = localStorage.getItem('token');
    console.log('userToken', userToken);
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer ' + userToken
        })
    };
    const url = `${environment}/u/claims`;
    return this.http.post(url, body, httpOptions);
  }

  getClaimConfig(id): Observable<any> {
    const userToken = localStorage.getItem('token');
    console.log('userToken', userToken);
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer ' + userToken
        })
    };
    return this.http.get<any>(`${API_ClaimConfig}/${id}`, httpOptions);
  }
  getCarConfig(id): Observable<any> {
    const userToken = localStorage.getItem('token');
    console.log('userToken', userToken);
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer ' + userToken
        })
    };
    return this.http.get<any>(`${API_CarConfig}/1`, httpOptions);
  }
  getDynamicFee() {
    const url = `${environment}/car-brand`;
    return this.http.get(url); 
   }

   getContract(contractCode) {
    const userToken = localStorage.getItem('token');
    console.log('userToken', userToken);
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer ' + userToken
        })
    };
    const url = `${environment}/u/contract/claims-info/${contractCode}`;
    return this.http.get(url, httpOptions); 
   }

   getClaimList(filter, page, size, sort): Observable<any> {
    const userToken = localStorage.getItem('token');
    console.log('userToken', userToken);
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer ' + userToken
        })
    };
    return this.http.get<any>(`${API_Claim}?page=${page}&size=${size}`, httpOptions);
  }  
  
}