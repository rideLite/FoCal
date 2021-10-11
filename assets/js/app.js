$(function(){
    
    let header = $("#header"),
        introH = $("#intro"). innerHeight(),
        scrollOffset = $(window).scrollTop();


        // fixed header 
    checkScroll(scrollOffset);
    
    // при скролле обновляю значение offSet'а
    $(window).on("scroll", function(){     
        scrollOffset = $(this).scrollTop(); 
        
          checkScroll(scrollOffset);
    });

    function checkScroll(){
        scrollOffset = $(this).scrollTop();
        
        if(scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // smooth scroll
    $("[data-scroll]").on ("click", function(event){
        event.preventDefault();
        let $this = $(this),
            blockId = $this. data('scroll'),
            blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");
            
            $("html, body").animate({
                scrollTop: blockOffset
            },800 ); 
    });
    // MENU nav toggle
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav_links").toggleClass("active");
    });
     $('[data-scroll]').on("click", function(){
        
        $("#nav_toggle").removeClass("active");
        $("#nav_links").removeClass("active");
    });

    let nav   = $(".nav-toggle"), // указываем кнопку
        links = $(".nav__links");
    $(document).mouseup( function (e) {
        if ( ! nav.is(e.target) && nav.has(e.target).length === 0 && // если клик был не по нашему блоку
             ! links.is(e.target) && links.has(e.target).length === 0 // и не по его дочерним элементам
               ) {
                $("#nav_toggle").removeClass("active");
                $("#nav_links").removeClass("active");
            }
      
    });



    // $('.btn-categories').on('click', function() {
    //     $('.div-categories').fadeToggle();
    //   });
    
    //   // Скрыть блок с категориями, по клику вне блока
    //   let btnCategories = $(".btn-categories"); // указываем кнопку
    //   let categories = $(".div-categories");
        
    //   $(document).mouseup(function (e) { // событие клика по веб-документу
    //     if ( ! btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
    //          // если клик был не по нашему блоку
    //          ! categories.is(e.target) && categories.has(e.target).length === 0
    //          // и не по его дочерним элементам
    //            ) {
    //       categories.fadeOut(); // скрываем его
    //         }
    //     });


    // $('#nav_toggle').on('click', function() {
    //     $(this).toggleClass("active");
    //     $('#nav_links').toggleClass("active");
    //   });
    
    //   // Скрыть блок с категориями, по клику вне блока
    //   let toggle = $("#nav_toggle"); // указываем кнопку
    //   let links = $("#nav_links");
        
    //   $(document).mouseup(function (e) { // событие клика по веб-документу
    //     if ( ! toggle.is(e.target) && toggle.has(e.target).length === 0 &&
    //          // если клик был не по нашему блоку
    //          ! links.is(e.target) && links.has(e.target).length === 0
    //          // и не по его дочерним элементам
    //            ) {
    //             links.fadeOut(); // скрываем его
    //         }
    //     });



    // SLIDER EPTA
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        arrows: false,
        dots:true
    });
});