$(document).ready(function() {

    var slider = $('.bxslider').bxSlider({
        speed : 500,
        mode : 'fade',
        auto : true
    });

    // section ourteam
    (function(){
        $('.team__link').on('click', function(e){
            e.preventDefault();

            var
                $this = $(this),
                item = $this.closest('.team__item'),
                container=$this.closest('.container'),
                content = container.find('.about-team__item'),
                ndx = item.index();


            item.addClass('team__item-active')
                .siblings()
                .removeClass('team__item-active');

            content.eq(ndx)
                .addClass('about-team__item-active')
                .siblings()
                .removeClass('about-team__item-active');
        });
    }());

    (function(){


        $('.questions__link').on('click', function(e){
            e.preventDefault();
            var
                $this = $(this),
                item = $this.closest('.questions__item');
            if (!item.hasClass('active')) {
                item
                    .addClass('active')
                    .siblings()
                    .removeClass('active')
            }
        });
    })();
    // скролл
    (function() {
        $("[href='#form']").click(function () {
            $("body, html").animate({
                scrollTop: $('.filling').offset().top - 50
            }, 1000);

            return false;
        });
    })();

    (function() {
        $("[href='#dost']").click(function () {
            $("body, html").animate({
                scrollTop: $('.questions').offset().top - 50
            }, 1000);

            return false;
        });
    })();

    (function() {
        $("[href='#comp']").click(function () {
            $("body, html").animate({
                scrollTop: $('#map').offset().top - 50
            }, 1000);

            return false;
        });
    })();

   


    (function() {
        $("[data-input-mask='phone']").mask("+7 (999) 999-99-99", {placeholder:"+7 (___) ___-__-__"});
    })();
});
