var swiper = new Swiper (".mySwiper2", {
  spaceBetween: 0,

navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  nested: true,
},
});
var swiper = new Swiper (".painting", {
  //autoHeight: false,
  pagination: {
    el: ".gallery .choices__item",
    type: 'fraction',
    nested: true,
  },
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  nested: true,
},
  spaseBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  nested: true,
});
var swiper = new Swiper (".drawing", {
  //autoHeight: false,
  spaseBetween: 0,
  slidesPerView: 3,
  slidesPerGroup: 2,
  slidesPerColumn: 2,
  nested: true,
});
var swiper = new Swiper (".sculpture", {
  //autoHeight: false,
  spaseBetween: 0,
  slidesPerView: 3,
  slidesPerGroup: 2,
  slidesPerColumn: 2,
  nested: true,
});
