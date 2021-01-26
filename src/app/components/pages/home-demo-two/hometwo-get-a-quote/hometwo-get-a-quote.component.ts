import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CarList } from '../../../model/car-insurance';

import { login } from '../../../store/store.action';
import { PurchasePageModel } from '../../purchase-page/purchase-page.model';
import { selectUserInfo } from '../../../store/store.selector';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-hometwo-get-a-quote',
  templateUrl: './hometwo-get-a-quote.component.html',
  styleUrls: ['./hometwo-get-a-quote.component.scss']
})
export class HometwoGetAQuoteComponent implements OnInit {
  
// use ng template in html


  carBrand: Array<any> = [];
  carMaker: Array<any> = [];
  carAims: Array<String> = ['Business', 'None Business'];
  carInsuranceForm: FormGroup;
  submitted = false;
  userInfo: any;

  product: any;

  insurancePrice: Number;

  carEstimation: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private service: AppService


  ) { }

  carInsurancePersonalInputs: Array<any> = [
    { type: 'text', formControlName: 'name', placeholder: 'Name', error: 'Insurance Name', hint: 'Insurance Name' },
    { type: 'text', formControlName: 'plate', placeholder: 'Vehicle registration plate', error: 'Insurance Code', hint: 'Insurance Code' },
    // { type: 'text', formControlName: 'numberOfSeat', placeholder: 'Number of Seat', error: 'Insurance Code', hint: 'Insurance Code' },
  ]

  carInsuranceContactInputs: Array<any> = [
    { type: 'text', formControlName: 'email', placeholder: 'Email', error: 'Insurance Name', hint: 'Insurance Name' },
    { type: 'text', formControlName: 'phoneNumber', placeholder: 'Phone Number', error: 'Insurance Code', hint: 'Insurance Code' },
    { type: 'address', formControlName: 'address', placeholder: 'Adress', error: 'Insurance Name', hint: 'Insurance Name' },
    // { type: 'note', formControlName: 'note', placeholder: 'Note', error: 'Insurance Name', hint: 'Insurance Name' },
  ]

  carInsurancePersonalSelect: Array<any> = [
    { type: 'text', formControlName: 'name', placeholder: 'Name', error: 'Insurance Name', hint: 'Insurance Name' },
  ]



  ngOnInit(): void {
    this.insurancePrice = 0;

    this.initCarInsuranceForm();


    this.getProduct();
    this.getUserInfo();
    this.getDynamicCarFee();
  }

  getUserInfo(): void {
    this.store.select(selectUserInfo).subscribe((data: any) => {
      this.userInfo = data;
    })
  }
  getProduct(): void {
    this.service.getProduct('BHOT').subscribe((data) => {
      console.log('data', data);
      this.product = data;
    });
  }

  initCarInsuranceForm() {
    this.carInsuranceForm = this.fb.group({
      name: ['', [Validators.required]], 
      plate: ['', [Validators.required]],
      // numberOfSeat: ['', [Validators.required]],
      carBrand: ['', [Validators.required]],
      carMaker: ['', [Validators.required]],
      // aims: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      // note: ['', [Validators.required]],
    })
  }

  get carInsuranceFormControl() {
    return this.carInsuranceForm.controls;
  }
  onChangeCarBrand(event) {
    console.log('event', event.target.value);
    this.carMaker = [];
    this.carBrand.forEach(element => {
      if(element.carBrandCode == event.target.value) {

        console.log(element.models);
        this.carMaker = JSON.parse(element.models);
      }
    });
    console.log(this.carMaker);

    // alert('a');
  }

  onChangeCarMaker(event) {
    console.log('event', event.target.value);
    this.getCarModelTitle(event.target.value);

    const name = this.carBrand.filter(item => item.carBrandCode === this.carInsuranceForm.controls.carBrand.value);
    const modelArrays = JSON.parse(name[0].models); 
    if (modelArrays && modelArrays.length > 0) {
      const itemArray = modelArrays.filter(item => item.code === event.target.value);
      this.carEstimation = itemArray[0].price;
      this.insurancePrice = parseInt(this.carEstimation) * 0.02
    }



  }



  onSubmit() {
    this.submitted = true;
    const controls = this.carInsuranceForm.controls;
    if (this.carInsuranceForm.valid) {
      const body: any = {
        name: this.carInsuranceForm.controls.name.value,
        numberPlate: this.carInsuranceForm.controls.plate.value,
        // numberofSeat: this.carInsuranceForm.controls.numberOfSeat.value,
        // aims: this.carInsuranceForm.controls.aims.value,
        carBrand: this.carInsuranceForm.controls.carBrand.value,
        carMaker: this.carInsuranceForm.controls.carMaker.value,
        carBrandName: this.getCarBrandName(controls['carBrand'].value),
        carBrandCode: controls['carBrand'].value,
        carModelTitle: this.getCarModelTitle(controls['carMaker'].value),
        carModelCode: controls['carMaker'].value,
        email: this.carInsuranceForm.controls.email.value,
        phoneNumber: this.carInsuranceForm.controls.phoneNumber.value,
        address: this.carInsuranceForm.controls.address.value,
        // note: this.carInsuranceForm.controls.note.value,
        price: this.insurancePrice,
        processName: "BuyNew",
        customerId: this.userInfo.customerId,
        productId: this.product.data.id ,
        partnerId: 1
      }
      // console.log('body', body);
      // this.appService.getConfig(body).subscribe((res) => {
        
      // });
      this.store.dispatch(login({purchaseForm: body}));
      this.router.navigate(['/payment']);
    }

  }

  getCarBrandName(value) {
    const name = this.carBrand.filter(item => item.carBrandCode === value);
    console.log('name', name[0].carBrand);
    return name[0].carBrand;
  }
  getCarModelTitle(value) {

    const name = this.carBrand.filter(item => item.carBrandCode === this.carInsuranceForm.controls.carBrand.value);
    const modelArrays = JSON.parse(name[0].models);  
    let title = '';
    if (modelArrays && modelArrays.length > 0) {
      const itemArray = modelArrays.filter(item => item.code === value);
      title = itemArray[0].title;
      console.log('title', title);
      return title;
    }
    console.log('title', title);
    return title;
  }


  getDynamicCarFee() {
    this.service.getDynamicFee().subscribe((res: Array<any>) => {
      console.log('dynamic fee', res);
      if (res && res.length > 0) {
        this.carBrand = res;
        console.log('aray', this.carBrand);
      }
    })
  }

}
