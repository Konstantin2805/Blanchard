$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__nav").toggleClass("active");
    $(".header__nav").attr("data-simplebar", true);
    $("body").toggleClass("look");
  });
});

