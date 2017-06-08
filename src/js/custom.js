
var for_pop_up={
    title_1:'Дзвонимо вам!',
    title_2:'Відвідати школу!',
    text1:'Введіть свій номер телефону та ми обов\'яково Вам передзвонимо',
    text2:'Введіть свій номер телефону та ми чекаємо на Вас в гостях',
    button_1:'Зателефонуйте мені',
    button_2:'Відправити'
}
$(document).ready(function() {
    new WOW().init();
  $('.your-class').slick({
    arrows:$( window ).width()> 1024 ? true : false,
    dots:true,
    autoplay:true,
  });

$('.banner').slick({
    arrows:false,
    dots:true,
    autoplay:true,
  });

  $('.about_school').click(function(){
        $('html, body').animate({
            scrollTop: $('.esse').offset().top
        },500);
    });

      $('.adventage_school').click(function(){
        $('html, body').animate({
            scrollTop: $('.esse').offset().top
        },500);
    });

      $('.programs_school').click(function(){
        $('html, body').animate({
            scrollTop: $('.teach').offset().top
        },500);
    });

      $('.strategy__school').click(function(){
        $('html, body').animate({
            scrollTop: $('.strategy').offset().top
        },500);
    });

      $('.value_school').click(function(){
        $('html, body').animate({
            scrollTop: $('.value').offset().top
        },500);
    });

      $('.comand_school').click(function(){
        $('html, body').animate({
            scrollTop: $('.our_comand').offset().top
        },500);
    });

     $('.contact_school').click(function(){
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        },500);
    });
     
      $('.coll_me').click(function(){
          $('.title_pop_up').text(for_pop_up.title_1);
          $('.text_pop_up').text(for_pop_up.text1);
          $('.call_pop_up').text(for_pop_up.button_1);
        $('.pop-other').fadeIn('slow');
    });
    $('.parent_botton').click(function(){
          $('.title_pop_up').text(for_pop_up.title_2);
          $('.text_pop_up').text(for_pop_up.text2);
          $('.call_pop_up').text(for_pop_up.button_2);
        $('.pop-other').fadeIn('slow');
    });
    $('.close').click(function(){
        $('.pop-other').fadeOut('slow');
    });
    $('.menu-trigger').click(function(){
        if($('.menu').is(':visible')){
             $('.menu-trigger').removeClass('close_triger');
            $('.menu-trigger').addClass('open');
        }
        else{
           
            $('.menu-trigger').removeClass('open');
            $('.menu-trigger').addClass('close_triger');
        }
        $('.menu').slideToggle(500);
    })
});