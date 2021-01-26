import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {selectOrderInfo} from '../../store/store.selector';


@Component({
  selector: 'app-certificate-page',
  templateUrl: './certificate-page.component.html',
  styleUrls: ['./certificate-page.component.scss']
})
export class CertificatePageComponent implements OnInit {

  constructor(
    private store: Store,

  ) { }

  certificateData: any;
  currentDate: string;
  expiredDate: string;
  fakeRes = {"name":"Minh","numberPlate":"29E182819","carMaker":"VICSA2019","email":"minhn211096@gmail.com","phoneNumber":"0383860666","address":"91 Nguiyen Chi Thanh","price":2000.0,"processName":"BuyNew","productId":1,"customerId":1,"carBrandCode":"VIC","carBrandName":"Vinfast","carModelCode":"VICSA2019","carModelTitle":"Lux SA2.0 2019","contractCode":"BHOT62482179939"}

contractCode: string;
carOwner: string;
carOwnerAddress: string;
telephone:string;
numberPlate: string;
carBrand: string;
carModel: string;
subscription: Subscription;
  ngOnInit() {
    this.store.select(selectOrderInfo).subscribe(data => {
      // console.log('1');
      // this.certificateData = this.fakeRes;
      // this.bindData(this.certificateData);
      if (data) {
        this.certificateData = data;
        this.bindData(this.certificateData);
      }
      console.log('certoficate', this.certificateData);

    });
    this.currentDate = this.getCurrentDate();
    this.expiredDate = this.getExpiredDate();
  }
  bindData(data) {
    this.contractCode = data.contractCode;
    this.carOwner = data.name;
    this.carOwnerAddress = data.address;
    this.telephone = data.phoneNumber;
    this.numberPlate = data.numberPlate;
    this.carBrand = data.carBrandName;
    this.carModel = data.carModelTitle;

  }

  getCurrentDate() {
    var today = new Date();
    var date = (today.getDate() + 1)+ '/' + (today.getMonth()+1) + '/' + today.getFullYear();
    return date;
  }

  getExpiredDate() {
    var today = new Date();
    var date = (today.getDate() + 1)+ '/' + (today.getMonth()+1) + '/' + (today.getFullYear()+1);
    return date;
  }

}
