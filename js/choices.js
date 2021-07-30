
const multiDefault = () => {
  const elements = document.querySelectorAll('.header__select');
  elements.forEach(el => {
    const choices = new Choices(el, {
      itemSelectText: '',
      searchEnabled: false,


    });
  });


}

multiDefault();


