import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppService } from 'src/app/app.service';

import {selectUser, selectTotal} from '../../store/store.selector';
import { LOAD_ORDER_INFO } from '../../store/store.action';


declare var paypal;
import jspdf from 'jspdf'; 


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  constructor(
    private store: Store,
    private service: AppService,
    private router: Router,

  ) { }

  orderInfo: any;
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

fakeRes = {"name":"Minh","numberPlate":"29E182819","carMaker":"VICSA2019","email":"minhn211096@gmail.com","phoneNumber":"0383860666","address":"91 Nguiyen Chi Thanh","price":2000.0,"processName":"BuyNew","productId":1,"customerId":1,"carBrandCode":"VIC","carBrandName":"Vinfast","carModelCode":"VICSA2019","carModelTitle":"Lux SA2.0 2019","contractCode":"BHOT62482179939"}
  ngOnInit() {
    this.store.select(selectTotal).subscribe(data => {
      this.orderInfo = data;
      console.log('orderInfo', this.orderInfo);
    });
    this.integratePaypal();
    this.store.dispatch(LOAD_ORDER_INFO({orderInfo: this.fakeRes}));

  }

  integratePaypal(): void {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'Revor Insurance',
                amount: {
                  currency_code: 'USD',
                  value1: this.orderInfo, 
                  value: 1
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          let length = 0;
          console.log('paypal', order);
          this.createOrder(this.orderInfo);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  createOrder(data) {
    this.service.createOrder(data).subscribe((res: any) => {
      console.log('res', res);
      if(res) {
        this.store.dispatch(LOAD_ORDER_INFO({orderInfo: res}));
        this.service.successMsg('Purchase success', 'Success');
        this.router.navigate(['/certificate']);
      }
    })
  }



}
