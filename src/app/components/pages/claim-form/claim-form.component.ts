import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppService } from 'src/app/app.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.scss']
})
export class ClaimFormComponent implements OnInit {
  claimForm: FormGroup;
  submitted = false;


  claimFormInput: Array<any> = [
    // { type: 'text', formControlName: 'contractCode', placeholder: 'Contract Code', error: 'Contract Id', hint: 'Contract Code' },
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
    { formControlName: 'rePaintAmount', label: 'Re Paint Amount', description: 'Insurance companies pay only a portion of the premium' },
    { formControlName: 'bringingFeeAmount', label: 'Bringing Fee Amount', description: 'Insurance companies pay only a portion of the premium'  },
    { formControlName: 'componentFeeAmount', label: 'Component Fee Amount', description: 'Insurance companies pay only a portion of the premium'  },
    { formControlName: 'rearViewMirrorAmount', label: 'rearViewMirrorAmount Fee Amount', description: 'Insurance companies pay only a portion of the premium'  },
    { formControlName: 'scratchedFeeAmount', label: 'Scratched Fee Amount', description: 'Insurance companies pay only a portion of the premium'  },
  ]

  garageInformation: Array<any> = [
    { type: 'text', formControlName: 'employeeName', placeholder: 'Employee Name', error: 'Employee Name', hint: 'Employee Name' },
    { type: 'text', formControlName: 'employeePhoneNumber', placeholder: 'Employee Phone Number', error: 'Employee Phone Number', hint: 'Employee Phone Number' },
  ]
  productInfo: Array<any> = [];
  contractInfo: Array<any> = []; 


  // productInformation: Array<any> = [
  //   {title: '', class: '', amount: ''}
  // ]


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
        repaintFee: this.claimForm.controls.rePaint.value ? this.claimForm.controls.rePaint.value : false ,
        repaintFeeAmount: this.claimForm.controls.rePaintAmount.value,
        bringingFee: this.claimForm.controls.bringingFee.value ? this.claimForm.controls.bringingFee.value : false ,
        bringingFeeAmount: this.claimForm.controls.bringingFeeAmount.value,
        rearViewMirror: this.claimForm.controls.rearViewMirror.value ?  this.claimForm.controls.rearViewMirror.value : false,
        rearViewMirrorAmount: this.claimForm.controls.rearViewMirrorAmount.value,
        componentFee: this.claimForm.controls.rearViewMirror.value ? this.claimForm.controls.rearViewMirror.value : false,
        componentFeeAmount: this.claimForm.controls.rearViewMirrorAmount.value,
        scratchedFee: this.claimForm.controls.scratchedFee.value ? this.claimForm.controls.scratchedFee.value : false,
        scratchedFeeAmount: this.claimForm.controls.scratchedFeeAmount.value,
        partnerId: 1,
        employeeName: this.claimForm.controls.employeeName.value,
        employeePhoneNumber: this.claimForm.controls.employeePhoneNumber.value,
        note: "not have note"
      }
      console.log('body', body);
      // this.router.navigate(['/register-otp']);


      this.appService.createClaim(body).subscribe((res: any) => {
        if (res) {
          const msg = `Your total compensation is ${res.amount}. Thank you for choosing Revor.`
          Swal.fire(msg, '', 'success');
          // this.appService.successMsg(res.amount, 'Success');
          this.claimForm.reset();
        }
      }, error => {
        console.log(error);
        this.appService.errorMsg('Not eligible for claim, youo have reached maximum times for claim', 'Error');
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
        {title: 'Maximum Compensation:', class: '',  value: `${res.data.priceObj} $`},
        {title: 'Maximum Repain Times:', class: '', value: res.data.numberRepaint},
        {title: 'Maximum Bringing Times:', class: '', value: res.data.numberBringing},
        {title: 'Maximum Component Times:', class: '', value: res.data.numberComponent},
        {title: 'Maximum Rear View Mirror Times:', class: '', value: res.data.numberRearViewMirror},
        {title: 'Maximum Scratched Times:', class: '', value: res.data.numberScratched},

        {title: '% Repaint Fee Covered by Revor:', class: '', value: `${res.data.repaintFee} %`},
        {title: '% Bringing Fee Covered by Revor:', class: '', value: `${res.data.bringingFee} %`},
        {title: '% Component Fee Covered by Revor:', class: '', value: `${res.data.componentFee} %`},
        {title: '% Rear View Mirror Fee Covered by Revor:', class: '', value: `${res.data.rearViewMirror} %`},
        {title: '% Scratched Fee Covered by Revor:', class: '', value: `${res.data.scratchedFee} %`},



      ]
      console.log('res', this.productInfo);
    })
  }

  getContract(event) {
    console.log('change', event.target.value);
    this.appService.getContract(event.target.value).subscribe((res: any) => {
      console.log('contract', res);
      if (res) {
        this.contractInfo = [
          // {title: 'Remain Compensation:', class: '',  value: `${res.maximumCompensation} $`},
          {title: 'Remain Repain Times:', class: '', value: res.numberRepaint},
          {title: 'Remain Bringing Times:', class: '', value: res.numberBringing},
          {title: 'Remain Component Times:', class: '', value: res.numberComponent},
          {title: 'Remain Rear View Mirror Times:', class: '', value: res.numberRearViewMirror},
          {title: 'Remain Scratched Times:', class: '', value: res.numberScratched},
  
        ]
      }
    })
  }

}
