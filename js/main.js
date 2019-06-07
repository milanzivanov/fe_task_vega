'use strict'

$(document).ready(function(){


    setInterval(function(){

        var currentSlide = currentSlide = $('.slide.active');
        var nextSlide = currentSlide.next();
    
        currentSlide.fadeOut(300).removeClass('active');
        nextSlide.fadeIn(300).addClass('active');
    
        if(nextSlide.length === 0 ) {
            $('.slide').first().fadeIn(300).addClass('active');
        }

    }, 10000);

    $('#right-arrow').on('click',function() {
        var currentSlide = currentSlide = $('.slide.active');
        var nextSlide = currentSlide.next();
    
        currentSlide.fadeOut(300).removeClass('active');
        nextSlide.fadeIn(300).addClass('active');
    
        if(nextSlide.length === 0 ) {
            $('.slide').first().fadeIn(300).addClass('active');
        }
    });
    
    
    $('#left-arrow').on('click',function() {
        var currentSlide = currentSlide = $('.slide.active');
        var prevSlide = currentSlide.prev();
    
        currentSlide.fadeOut(300).removeClass('active');
        prevSlide.fadeIn(300).addClass('active');
    
        if(prevSlide.length === 0 ) {
            $('.slide').last().fadeIn(300).addClass('active');
        }
    });

});




