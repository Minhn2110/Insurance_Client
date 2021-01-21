import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-claims-page',
  templateUrl: './claims-page.component.html',
  styleUrls: ['./claims-page.component.scss']
})
export class ClaimsPageComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  title: string;
  bannerImg: string;
  body: any;


  ngOnInit(): void {
    this.appService.getClaimConfig(1).subscribe((res) => {
      if (res) {
        this.title = res.claimConfigFormHeader;
        this.bannerImg = res.claimConfigFormBanner;
        this.body = res.claimConfigFormBody;
      }
      console.log('res', res);
    })
  }

}
