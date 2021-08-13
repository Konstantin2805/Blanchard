

const artSelect = () => {
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
      itemSelectText: '',
      searchEnabled: false,
      position: 'bottom',
      shouldSort: false,
      placeholder: false,
    });
};
artSelect();
// пагинатор селектором
var select = document.querySelector('#selectCustom');
select.addEventListener('change', function() {
  console.log(this.value);
  const index = this.value;
  console.log(index);
  swiperBig.slideTo(index);
});

var swiperBig = new Swiper(".gallery__swiper-big", {
  direction: "vertical",
  pagination: {
      el: '.gallery__swiper-big .swiper-pagination',
      type: 'progressbar',
      clickable: true,
   },
   simulateTouch: false,


});

var swip = new Swiper(".gallery__slide-big", {

  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  watchOverflow: true,

  //nested: true,
  pagination: {
    el: '.gallery__slide-big .swiper-pagination',
    type: 'fraction',

 },
 navigation: {
  nextEl: ".gallery__nav .swiper-button-next",
  prevEl: ".gallery__nav .swiper-button-prev",
},

});


//записки сумасшедшего, вынос pagination:fracion куда хошь
  $(".swiper-pagination-current").bind("DOMSubtreeModified", function(){
    var current =document.getElementsByClassName("swiper-pagination-current")[0].innerHTML;
    var total =document.getElementsByClassName("swiper-pagination-total")[0].innerHTML;
    console.log(current+"/"+total);

  var cust = current+"/"+total;

  var text = document.getElementById('pag');

  function pagCust() {
    text.innerHTML = cust;
  };

  pagCust();
  var custom =document.getElementsByClassName("pagination-custom")[0].innerHTML;
   console.log(custom);
  });

