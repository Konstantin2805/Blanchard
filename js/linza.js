$(document).ready(function () {
  $(".header__linza .header__top-search").click(function () {
    $(".header__linza .header__search").toggle();
    $(".header__linza .header__search").animate({ opacity: 1 }, 500);
  });
});
$(document).on("click", function (e) {
  if (!$(e.target).closest(".header__linza").length) {
    $(".header__linza .header__search").hide();
  }
  e.stopPropagation();
});
