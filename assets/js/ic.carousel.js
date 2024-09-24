/** 	=========================
	Template Name 	 : FastClock
	Author			 : DexignZone
	Version			 : 1.0
	File Name		 : custom.js

	Core script to handle the entire theme and core functions
**/

/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';
	
	// Get Started ==========
	if(jQuery('.get-started').length > 0){
		var swiper = new Swiper('.get-started', {
			speed: 1500,
			spaceBetween: 0,
			parallax: true,
			loop:true,
			pagination: {
                el: ".swiper-pagination",
                clickable: true,
			},
		});
	}
	
	if(jQuery('.banner-swiper').length > 0){
		var bannerSwiper = new Swiper('.banner-swiper', {
			speed: 1000,
			slidesPerView: 1.2,
			spaceBetween: 10,
			centeredSlides: true,
			loop:true,
			autoplay: {
				delay: 1500,
			},
		});
	}

	// CategorySlide ==========
	if(jQuery('.category-slide').length > 0){
		var swiper = new Swiper('.category-slide', {
			speed: 1000,
			spaceBetween: 10,
			slidesPerView: "auto",
		});
	}

	// ProductDetailSwiper ==========
	if(jQuery('.product-detail-swiper').length > 0){
		var swiper = new Swiper(".product-detail-swiper", {
			slidesPerView: "auto",
			freeMode: true,
			watchSlidesProgress: true,
		});
		var swiper2 = new Swiper(".product-detail-swiper2", {
			thumbs: {
				swiper: swiper,
			},
		});
	}
	
	// PaymentCardSwiper ==========
	if(jQuery('.payment-card-swiper').length > 0){
		var swiper = new Swiper('.payment-card-swiper', {
			speed: 200,
			slidesPerView: "1.2",
			spaceBetween: 10,
			breakpoints: {
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 2
				},
				1080: {
					slidesPerView: 2
				},
			}
		});
	}
	// Coupon Swiper ==========
	if(jQuery('.coupon-swiper').length > 0){
		var swiper = new Swiper('.coupon-swiper', {
			speed: 500,
			slidesPerView: "auto",
			spaceBetween: 10,
		});
	}
});
/* Document .ready END */