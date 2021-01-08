import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

	partnerImageArray: Array<any> = [
	 {url: 'assets/img/partner/partner-1.jpg'},
	 {url: 'https://ibaoviet.vn/wp-content/uploads/2017/12/BAOVIET-Bank-Ng%C3%A2n-h%C3%A0ng-B%E1%BA%A3o-Vi%E1%BB%87t.jpg'},
	 {url: 'assets/img/partner/partner-1.jpg'},
	 {url: 'assets/img/partner/partner-1.jpg'},
	 {url: 'assets/img/partner/partner-1.jpg'},
	];

    constructor() { }

    ngOnInit(): void {
    }
    
    partnerSlidesOptions: OwlOptions = {
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive:{
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
    }

}