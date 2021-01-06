import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homeone-why-choose-us',
    templateUrl: './homeone-why-choose-us.component.html',
    styleUrls: ['./homeone-why-choose-us.component.scss']
})
export class HomeoneWhyChooseUsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    whyChooseUsSliderOptions: OwlOptions = {
		items:1,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive:{
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
    }

}