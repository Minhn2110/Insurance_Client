import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.scss']
})
export class ClaimFormComponent implements OnInit {
  claimForm: FormGroup;
  submitted = false;


  claimFormInput: Array<any> = [
    { type: 'text', formControlName: 'contractCode', placeholder: 'Contract Code', error: 'Contract Id', hint: 'Contract Code' },
    { type: 'text', formControlName: 'customerName', placeholder: 'Customer Name', error: 'Customer Name', hint: 'Customer Name' },
    { type: 'text', formControlName: 'carPlate', placeholder: 'Car Plate', error: 'Car Plate', hint: 'Car Plate' },
  ];

  coverageCheckbox: Array<any> = [
    { formControlName: 'rePaint', label: 'Re Paint' },
    { formControlName: 'bringingFee', label: 'Bringing Fee' },
    { formControlName: 'componentFee', label: 'Component Fee' },
    { formControlName: 'rearViewMirror', label: 'Rear View Mirror Fee' },
    { formControlName: 'scratchedFee', label: 'Scratched Fee' },
  ]

  coverageAmount: Array<any> = [
    { formControlName: 'rePaintAmount', label: 'Re Paint Amount', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { formControlName: 'bringingFeeAmount', label: 'Bringing Fee Amount', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  },
    { formControlName: 'componentFeeAmount', label: 'Component Fee Amount', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  },
    { formControlName: 'rearViewMirrorAmount', label: 'rearViewMirrorAmount Fee Amount', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  },
    { formControlName: 'scratchedFeeAmount', label: 'Scratched Fee Amount', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  },
  ]

  garageInformation: Array<any> = [
    { type: 'text', formControlName: 'employeeName', placeholder: 'Employee Name', error: 'Employee Name', hint: 'Employee Name' },
    { type: 'text', formControlName: 'employeePhoneNumber', placeholder: 'Employee Phone Number', error: 'Employee Phone Number', hint: 'Employee Phone Number' },
  ]
  productInfo: Array<any> = [];



  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.createClaimForm();
    this.getProduct();
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.disableDetailCoverage();

  }

  disableDetailCoverage() {
    const detailCoverageAmountInputs = this.coverageAmount.map(x => x.formControlName);
    detailCoverageAmountInputs.forEach(elm => {
      let inputElm = document.querySelector(`#${elm}`);
      inputElm.setAttribute('disabled', 'true');      
    });
  }



  createClaimForm() {
    this.claimForm = this.fb.group({
      contractCode: ['', [Validators.required]], 
      customerName: ['', [Validators.required]], 
      carPlate: ['', [Validators.required]], 
      rePaint: ['', []], 
      rePaintAmount: ['', []],  
      bringingFee: ['', []], 
      bringingFeeAmount: ['', []], 
      componentFee: ['', []], 
      componentFeeAmount: ['', []],
      rearViewMirror: ['', []], 
      rearViewMirrorAmount: ['', []],  
      scratchedFee: ['', []], 
      scratchedFeeAmount: ['', []], 
      employeeName: ['', [Validators.required]], 
      employeePhoneNumber: ['', [Validators.required]], 

    })

  }

  onCreateClaimForm() {
    this.submitted = true;
    if (this.claimForm.valid) {
      const body = {
        // Personal
        contractCode: this.claimForm.controls.contractCode.value,
        numberPlate: this.claimForm.controls.carPlate.value,
        name:  this.claimForm.controls.customerName.value,
        //Insurance
        repaintFee: this.claimForm.controls.rePaint.value,
        repaintFeeAmount: this.claimForm.controls.rePaintAmount.value,
        bringingFee: this.claimForm.controls.bringingFee.value,
        bringingFeeAmount: this.claimForm.controls.bringingFeeAmount.value,
        rearViewMirror: this.claimForm.controls.rearViewMirror.value,
        rearViewMirrorAmount: this.claimForm.controls.rearViewMirrorAmount.value,
        componentFee: this.claimForm.controls.rearViewMirror.value,
        componentFeeAmount: this.claimForm.controls.rearViewMirrorAmount.value,
        scratchedFee: this.claimForm.controls.scratchedFee.value,
        scratchedFeeAmount: this.claimForm.controls.scratchedFeeAmount.value,
        partnerId: 1,
        employeeName: "nghia",
        employeePhoneNumber: "1",
        note: "not have note"
      }
      console.log('body', body);
      // this.router.navigate(['/register-otp']);


      this.appService.createClaim(body).subscribe((res: any) => {
        if (res) {
          this.appService.successMsg(res.amount, 'Success');
        }
      }, error => {
        console.log(error);
        this.appService.errorMsg(error.error.errors[0], 'Error');
      });
    }
  }
  onChangeCoverageCbx(event) {
    console.log(event);
    let inputElm = document.querySelector(`#${event.target.id}Amount`);
    console.log(inputElm);
    if (event.target.checked) {
      inputElm.removeAttribute('disabled');   
    } else {
      inputElm.setAttribute('disabled', 'true');   
    }
 
  }

  onChangeDetailAmount(event) {
    console.log(event.target);
  }

  getProduct() {
    this.appService.getProduct('BHOT').subscribe((res: any) => {
      console.log('res', res);
       this.productInfo = [
        {title: 'Maximum Compensation', class: '',  value: res.data.priceObj}
      ]
      console.log('res', this.productInfo);
    })
  }

}
