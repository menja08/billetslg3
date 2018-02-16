$(document).ready(function () {

    var width = 720;
    /*var screenSize = $(window).width();
    if (screenSize < 500) {
        width = 320;
    } else {
        width = 720;
    }*/
    // configuration
    //var width = 720;//300;
    var animationSpeed = 4000;
    var pause = 12000;
    // start at the first slide
    var currentSlide = 1;

    // cache DOM for faster loads
    var slider = $(".slider1");
    // .slides became .topLeft
    var slideContainer = slider.find(".topLeft");
    var slides = slideContainer.find(".slide");

    // setInterval; a built-in javascript function, takes 2 parameters,
    // a function and an interval where 1000 is equal to 1 second
    // animate margin-left
    // if it's last slide, go to position 1 (ie 0px)

    // setInterval function runs every 3 seconds, the slide runs for 1 second
    // "-=720px" implies we subtract 720px after every slide(from a width of 6000px ?)
    setInterval(function () {
        // in the animate() function, we include a callback function to test if we have
        // reached the last slide
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            // checks if we have reached the last slide (which we intentionally repeated)
            if (currentSlide === slides.length) {
                currentSlide = 1;
                // set the left margin using css, and not animation
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number2
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 9000;
    var currentSlide = 1;
    var slider = $(".slider2");
    var slideContainer = slider.find(".topMiddle");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 3
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 8000;
    var currentSlide = 1;

    // cache DOM for faster loads
    var slider = $(".slider3");
    var slideContainer = slider.find(".topRight");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 4
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 12000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider4");
    var slideContainer = slider.find(".bottomLeft");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 5
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 8000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider5");
    var slideContainer = slider.find(".bottomMiddle");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 6
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 6000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider6");
    var slideContainer = slider.find(".bottomRight");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// edit bottomRight/left
// number 7
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 7000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider7");
    var slideContainer = slider.find(".top1Left");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 8
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 8000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider8");
    var slideContainer = slider.find(".top1Middle");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 9
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 9000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider9");
    var slideContainer = slider.find(".top1Right");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 10
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 10000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider10");
    var slideContainer = slider.find(".bottom1Left");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 11
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 11000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider11");
    var slideContainer = slider.find(".bottom1Middle");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 12
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 12000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider12");
    var slideContainer = slider.find(".bottom1Right");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// for mobile
// number 1
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 12000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider1");
    var slideContainer = slider.find(".topMobileLeft");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 3
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 12000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider3");
    var slideContainer = slider.find(".topMobileRight");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 7
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 12000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider7");
    var slideContainer = slider.find(".top1MobileLeft");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});

// number 9
$(document).ready(function () {
    var width = 720;
    var animationSpeed = 4000;
    var pause = 12000;
    var currentSlide = 1;
    // cache DOM for faster loads
    var slider = $(".slider9");
    var slideContainer = slider.find(".top1MobileRight");
    var slides = slideContainer.find(".slide");
    setInterval(function () {
        slideContainer.animate({"margin-left": "-=" +width}, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slides.length) {
                currentSlide = 1;
                slideContainer.css("margin-left", 0);
            }
        });
    }, pause);
});
