// Accordion
$(function () {
  $(".tabs__accordion").accordion({
    collapsible: true,
    heightStyle: "content",
  });
});

// Tabs

document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
  //событие нажатия кнопки
  tabsBtn.addEventListener("click", function (event) {
    //убрать класс активной кнопки у всех
    document.querySelectorAll(".tabs__btn").forEach(function (tabsBtnActive) {
      tabsBtnActive.classList.remove("tabs__btn-active");
    });
    //добавить класс текущей ативной кнопки
    this.classList.add("tabs__btn-active");
    const path = event.currentTarget.dataset.path;
    document.querySelectorAll(".tabs__content").forEach(function (tabsContent) {
      tabsContent.classList.remove("tabs__content-active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs__content-active");
    //перезагружаем аккардион во вкладках
    $(function () {
      $(".tabs__accordion").accordion("refresh");
    });
  });
  //событие наведения курсора мыши
  tabsBtn.addEventListener("mouseover", function (event) {
    let target = event.target;
    target.classList.add("tabs__shadow");
  });
  //событие ухода курсора мыши с кнопки таба
  tabsBtn.addEventListener("mouseout", function (event) {
    let target = event.target;
    target.classList.remove("tabs__shadow");
  });
});

// Tabs-accordion

document.querySelectorAll(".accordion__btn").forEach(function (tabsBtnAcc) {
  tabsBtnAcc.addEventListener("click", function (event) {
    //убираем контент по умолчанию
    document.querySelectorAll(".default").forEach(function (e) {
      e.remove();
    });
    //убрать класс активной кнопки у всех
    document
      .querySelectorAll(".accordion__btn")
      .forEach(function (tabsBtnAccActive) {
        tabsBtnAccActive.classList.remove("accordion__btn-active");
      });
    //добавить класс текущей ативной кнопки
    this.classList.add("accordion__btn-active");
    //записываем текущего художественного деятеля в переменную
    let currentBtnActive = this.innerHTML;

    const pathAcc = event.currentTarget.dataset.path;
    //убрать класс активного контента у всех
    document
      .querySelectorAll(".tabs__painter-desc")
      .forEach(function (tabsContentAcc) {
        tabsContentAcc.classList.remove("tabs__painter-desc-active");
      });
    //добавить класс активного контента по ссылке текущей кнопки
    document
      .querySelector(`[data-target="${pathAcc}"]`)
      .classList.add("tabs__painter-desc-active");
  });
});
