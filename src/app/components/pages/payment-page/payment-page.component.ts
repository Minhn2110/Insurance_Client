import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import {selectUser, selectTotal} from '../../store/store.selector';

declare var paypal;

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  data: any;
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;


  ngOnInit() {
    this.store.select(selectTotal).subscribe(data => console.log('data', data));
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
                  value1: this.data, 
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

}
