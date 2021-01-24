import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-car-insurance-page',
  templateUrl: './car-insurance-page.component.html',
  styleUrls: ['./car-insurance-page.component.scss']
})
export class CarInsurancePageComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  headerContent: string;
  bannerImg: string;
  body: any;


  ngOnInit(): void {
    this.appService.getCarConfig(1).subscribe((res) => {
      if (res) {
        this.headerContent = res.carConfigHeaderContent;
        this.bannerImg = res.carConfigBannerFile;
        this.body = res.carConfigBodyContent;
      }
      console.log('res', res);
    })
  }

}
