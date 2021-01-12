$(function () {

  $('.footer__item-title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__item-title--active');
  });



  $('.header__burger').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });


  $('.programm__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
         slidesToShow: 3, 
        }
      },
      {
        breakpoint: 900,
        settings: {
         slidesToShow: 2, 
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 1, 
        }
      },
    ]
  });

  $('.example__inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="21" height="39" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6329 38.5965C18.9034 38.8655 19.2415 39 19.6135 39C19.9855 39 20.3237 38.8655 20.5942 38.5965C21.1353 38.0586 21.1353 37.1845 20.5942 36.6466L3.34783 19.5L20.5942 2.35345C21.1353 1.81552 21.1353 0.941379 20.5942 0.403448C20.0531 -0.134483 19.1739 -0.134483 18.6329 0.403448L0.405798 18.525C-0.135265 19.0629 -0.135265 19.9371 0.405798 20.475L18.6329 38.5965Z" fill="#ACACAC"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="21" height="39" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.36715 38.5965C2.09662 38.8655 1.75845 39 1.38647 39C1.01449 39 0.676328 38.8655 0.405797 38.5965C-0.135266 38.0586 -0.135266 37.1845 0.405797 36.6466L17.6522 19.5L0.405797 2.35345C-0.135266 1.81552 -0.135266 0.941379 0.405797 0.403448C0.94686 -0.134483 1.82609 -0.134483 2.36715 0.403448L20.5942 18.525C21.1353 19.0629 21.1353 19.9371 20.5942 20.475L2.36715 38.5965Z" fill="#ACACAC"/></svg></button>',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
         slidesToShow: 3, 
        }
      },
      {
        breakpoint: 850,
        settings: {
         slidesToShow: 2, 
         arrows: false,
         dots: true,
        }
      },
      {
        breakpoint: 570,
        settings: {
         slidesToShow: 1,
         arrows: false,
         dots: true,
        }
      },
    ]
  });

});

jQuery(function($){
   $("#phone").mask("+7 (999) 999-99-99",{placeholder:" "});
});

