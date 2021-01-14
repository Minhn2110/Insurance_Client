import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.scss']
})
export class ClaimFormComponent implements OnInit {
  claimForm: FormGroup;

  claimFormInput: Array<any> = [
    { type: 'text', formControlName: 'contractId', placeholder: 'Contract Id', error: 'Contract Id', hint: 'Contract Id' },
    { type: 'text', formControlName: 'customerName', placeholder: 'Customer Name', error: 'Customer Name', hint: 'Customer Name' },
    { type: 'text', formControlName: 'carPlate', placeholder: 'Car Plate', error: 'Car Plate', hint: 'Car Plate' },
  ];

  coverageCheckbox: Array<any> = [
    { formControlName: 'rePaint', label: 'Re Paint' },
    { formControlName: 'bringingFee', label: 'Bringing Fee' },
    { formControlName: 'componentFee', label: 'Component Fee' },
  ]

  coverageAmount: Array<any> = [
    { formControlName: 'rePaintAmount', label: 'Re Paint Amount', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { formControlName: 'bringingFeeAmount', label: 'Bringing Fee Amount', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  },
    { formControlName: 'componentFeeAmount', label: 'Component Fee Amount', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  },
  ]

  garageInformation: Array<any> = [
    { type: 'text', formControlName: 'employeeName', placeholder: 'Employee Name', error: 'Employee Name', hint: 'Employee Name' },
    { type: 'text', formControlName: 'employeePhoneNumber', placeholder: 'Employee Phone Number', error: 'Employee Phone Number', hint: 'Employee Phone Number' },
  ]



  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.createClaimForm();
  }



  createClaimForm() {
    this.claimForm = this.fb.group({
      contractId: ['', [Validators.required]], 
      customerName: ['', [Validators.required]], 
      carPlate: ['', [Validators.required]], 
      rePaint: ['', [Validators.required]], 
      bringingFee: ['', [Validators.required]], 
      componentFee: ['', [Validators.required]], 
      employeeName: ['', [Validators.required]], 
      employeePhoneNumber: ['', [Validators.required]], 

    })

  }
  onChangeCoverageCbx(event) {
    console.log(event);
  }

  onChangeDetailAmount(event) {
    console.log(event.target);

  }

}
