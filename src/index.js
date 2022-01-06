import './styles/index.scss'
import $ from "jquery";
// import 'bootstrap';

$('.li-dropdown').on('click', function () {
  $(this).find('.li-dropdown__ul').fadeToggle();

  $(document).mouseup(function (e){ // событие клика по веб-документу
    const div = $(".li-dropdown"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.find('.li-dropdown__ul').fadeOut(); // скрываем его
    }
  });

});