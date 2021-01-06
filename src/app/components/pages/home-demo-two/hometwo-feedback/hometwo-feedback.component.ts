import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-feedback',
    templateUrl: './hometwo-feedback.component.html',
    styleUrls: ['./hometwo-feedback.component.scss']
})
export class HometwoFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    testimonialsSliderOptions: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
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
                items: 1
            },
            1200: {
                items: 1
            }
        }
    }

}