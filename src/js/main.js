import "../sass/main.scss";
import * as bootstrap from "bootstrap";

(function () {
	"use strict";

	const breakpoint = window.matchMedia(
		"(min-width: 0px) and (max-width: 768px)"
	);

	let mySwiper;

	const breakpointChecker = function () {
		if (breakpoint.matches === true) {
			if (mySwiper !== undefined) mySwiper.destroy(true, true);

			return;
		} else if (breakpoint.matches === false) {
			return enableSwiper();
		}
	};

	const enableSwiper = function () {
		mySwiper = new Swiper(".mySwiper", {
			slidesPerView: "auto",
			spaceBetween: 30,
			navigation: {
				nextEl: ".swiper-button-next",
			},
			pagination: {
				clickable: true,
			},
			mousewheel: true,
			keyboard: true,
		});
	};

	breakpoint.addListener(breakpointChecker);

	breakpointChecker();
})();
