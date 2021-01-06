import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homethree-feedback',
    templateUrl: './homethree-feedback.component.html',
    styleUrls: ['./homethree-feedback.component.scss']
})
export class HomethreeFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    testimonialsSliderOptions: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        margin: 30,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
        ],
        responsive:{
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    }

}
