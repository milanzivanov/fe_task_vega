"use strict";$("#right-arrow").on("click",function(){var a=a=$(".slide.active"),e=a.next();a.fadeOut(300).removeClass("active"),e.fadeIn(300).addClass("active"),0===e.length&&$(".slide").first().fadeIn(300).addClass("active")}),$("#left-arrow").on("click",function(){var a=a=$(".slide.active"),e=a.prev();a.fadeOut(300).removeClass("active"),e.fadeIn(300).addClass("active"),0===e.length&&$(".slide").last().fadeIn(300).addClass("active")});