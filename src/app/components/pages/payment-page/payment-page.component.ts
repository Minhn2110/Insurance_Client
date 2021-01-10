import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppService } from 'src/app/app.service';

import {selectUser, selectTotal} from '../../store/store.selector';

declare var paypal;

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


  ngOnInit() {
    this.store.select(selectTotal).subscribe(data => {
      this.orderInfo = data;
      console.log('orderInfo', this.orderInfo);
      this.createOrder(this.orderInfo);
    });
    this.integratePaypal();
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
      if(res && res.status) {
        this.service.successMsg('Purchase success', 'Success');
        this.router.navigate(['/']);
      }
    })
  }

}
