import { Component, OnInit} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initialize home slider
    const homeSlider = new Swiper(".home-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Initialize trending slider
    const trendingSlider = new Swiper(".trending-slider", {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 0,
      centeredSlides: false,
      navigation: {
        nextEl: "#popular-button-next",
        prevEl: "#popular-button-prev",
      },
      breakpoints: {
        1368: {
          slidesPerView: 6,
          spaceBetween: 0,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });
  }

}
