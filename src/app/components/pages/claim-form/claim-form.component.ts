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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit(): void {
  }



  createClaimForm() {
    this.claimForm = this.fb.group({
      contractId: ['', [Validators.required]], 
      customerName: ['', [Validators.required]], 
      carPlate: ['', [Validators.required]], 
    })

  }

}
