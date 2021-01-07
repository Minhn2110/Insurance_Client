import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CarList } from '../../../model/car-insurance';

import { login } from '../../../store/store.action';
import { PurchasePageModel } from '../../purchase-page/purchase-page.model';

declare var paypal;

@Component({
  selector: 'app-hometwo-get-a-quote',
  templateUrl: './hometwo-get-a-quote.component.html',
  styleUrls: ['./hometwo-get-a-quote.component.scss']
})
export class HometwoGetAQuoteComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  
// use ng template in html


  carBrand: Array<any> = [];
  carMaker: Array<any> = [];
  carAims: Array<String> = ['Business', 'None Business'];
  carInsuranceForm: FormGroup;
  submitted = false;



  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store


  ) { }

  carInsurancePersonalInputs: Array<any> = [
    { type: 'text', formControlName: 'name', placeholder: 'Name', error: 'Insurance Name', hint: 'Insurance Name' },
    { type: 'text', formControlName: 'plate', placeholder: 'Vehicle registration plate', error: 'Insurance Code', hint: 'Insurance Code' },
    { type: 'text', formControlName: 'numberOfSeat', placeholder: 'Number of Seat', error: 'Insurance Code', hint: 'Insurance Code' },
  ]

  carInsuranceContactInputs: Array<any> = [
    { type: 'text', formControlName: 'email', placeholder: 'Email', error: 'Insurance Name', hint: 'Insurance Name' },
    { type: 'text', formControlName: 'phoneNumber', placeholder: 'Phone Number', error: 'Insurance Code', hint: 'Insurance Code' },
    { type: 'address', formControlName: 'address', placeholder: 'Adress', error: 'Insurance Name', hint: 'Insurance Name' },
    { type: 'note', formControlName: 'note', placeholder: 'Note', error: 'Insurance Name', hint: 'Insurance Name' },
  ]

  carInsurancePersonalSelect: Array<any> = [
    { type: 'text', formControlName: 'name', placeholder: 'Name', error: 'Insurance Name', hint: 'Insurance Name' },
  ]



  ngOnInit(): void {
    this.initCarInsuranceForm();
    console.log(CarList)
    this.carBrand = CarList.map(item => item.brand);
    console.log(this.carBrand);

    // setTimeout(() => {
    //   this.integratePaypal();

    // }, 1000);
  }

  initCarInsuranceForm() {
    this.carInsuranceForm = this.fb.group({
      name: ['', [Validators.required]], 
      plate: ['', [Validators.required]],
      numberOfSeat: ['', [Validators.required]],
      carBrand: ['', [Validators.required]],
      carMaker: ['', [Validators.required]],
      aims: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      note: ['', [Validators.required]],
    })
  }

  get carInsuranceFormControl() {
    return this.carInsuranceForm.controls;
  }
  onChangeCarBrand(event) {
    console.log('event', event.target.value);
    this.carMaker = [];
    CarList.forEach(element => {
      if(element.brand === event.target.value) {
        this.carMaker = element.models;
      }
    });
    console.log(this.carMaker);

    // alert('a');
  }

  integratePaypal(): void {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'SMS Online Services Payment',
                amount: {
                  currency_code: 'USD',
                  // value: this.total.toFixed(2)
                  value: 777.77
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

  onSubmit() {
    this.submitted = true;
    if (this.carInsuranceForm.valid) {
      const body: PurchasePageModel = {
        name: this.carInsuranceForm.controls.name.value,
        numberPlate: this.carInsuranceForm.controls.plate.value,
        numberofSeat: this.carInsuranceForm.controls.numberOfSeat.value,
        aims: this.carInsuranceForm.controls.aims.value,
        carBrand: this.carInsuranceForm.controls.carBrand.value,
        carMaker: this.carInsuranceForm.controls.carMaker.value,
        email: this.carInsuranceForm.controls.email.value,
        phoneNumber: this.carInsuranceForm.controls.phoneNumber.value,
        address: this.carInsuranceForm.controls.address.value,
        note: this.carInsuranceForm.controls.note.value,
        price: 10000,

      }
      // console.log('body', body);
      // this.appService.getConfig(body).subscribe((res) => {
        
      // });
      this.store.dispatch(login({purchaseForm: body}));
      this.router.navigate(['/payment']);
    }

  }

}
