const element = document.querySelector("#selectCustom");
const choices = new Choices(element, {
  itemSelectText: "",
  searchEnabled: false,
  position: "bottom",
  shouldSort: false,
});

//   Slider Swiper
var swip = new Swiper(".gallery__slider-container", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
    observer: true,
    resizeObserver: true,
    centeredSlides: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: {
    prevSlideMessage: "Предыдущий",
    nextSlideMessage: "Следующий слайд",
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    481: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true,
    },
    992: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true,
    },
    1200: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true,
    },
    1640: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
      loopFillGroupWithBlank: true,
    },
  },
});

/*------------- Modal ---------------*/
const cardGallery = document.querySelectorAll(".gallery__item");

for (let card of cardGallery) {
  card.addEventListener("click", function () {
    //popup
    const popup = document.querySelector(".popup");
    popup.classList.add("popup__is-active");
    //получаем путь к картинке
    let imgSrc = card
      .querySelector("picture source:nth-child(3)")
      .getAttribute("srcset");
    //путь к картинке при разрешении меньше 480px
    const mediaQueryMax480img = window.matchMedia("(max-width: 480px)");
    function handleTabletChange480img(e) {
      if (e.matches) {
        imgSrc = card
          .querySelector("picture source:nth-child(1)")
          .getAttribute("srcset");
      }
    }
    mediaQueryMax480img.addListener(handleTabletChange480img);
    handleTabletChange480img(mediaQueryMax480img);
    //создаем новую картинку
    const newImg = document.createElement("img");
    newImg.src = imgSrc;

    //заменяем текущую картинку на новую
    $(".popup__content img").replaceWith(newImg);
  });
}
//закрываем модальное окно
document.querySelector("#popup__close").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("popup__is-active");
});
