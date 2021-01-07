import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {selectUser, selectTotal} from '../../store/store.selector';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.select(selectTotal).subscribe(data => console.log('data', data));
  }

}
