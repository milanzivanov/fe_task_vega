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

// tab
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("service-box");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("service-tabs_tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
  }




