const slider = document.querySelector(".swiper");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,
      slideClass: "brands-button",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});
