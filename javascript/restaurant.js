$(document).ready(function() {
  //nav bar toggle function when screen size is small the listed nav
  //bar will be hide and three bars represent nav bar when click list
  //nav bar vertical again click will hide nav bar.
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $(".bars").toggleClass("bars-hide");
    $(".times").toggleClass("times-show");
    $("nav ul").toggleClass("active");
  });
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {
    navbarSticky();
    
  };
  
  // Get the navbar
  var navbar = document.getElementById("navigation-bar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function navbarSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }


  //Dish image automatic slide show
  var slideIndex = 0;
    showSlides();

  function showSlides() {
    var slides = $(".mySlides");
    var dots = $(".dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    setTimeout(showSlides, 2000);
  }


  $(".breakfast").on("click", function (e) {
    e.preventDefault();
    $.get("./pages/breakfast.html", function (data) {
        $("#eachMenu-page").html(data);
        $(".front h1").text("breakfast menu");
        $(".front,.back").css("background-color","orange"); 
    }); 
  });


  $(".lunch").on("click", function (e) {
    e.preventDefault();
    $.get("./pages/lunch.html", function (data) {
        $("#eachMenu-page").html(data);
        $(".front h1").text("lunch menu");
        $(".front,.back").css("background-color"," rgb(11, 155, 199)");
        
    });
    
  });


  $(".dinner").on("click", function (e) {
    e.preventDefault();
    $.get("./pages/dinner.html", function (data) {
        $("#eachMenu-page").html(data);
        $(".front h1").text("dinner menu");
        $(".front,.back").css("background-color","navy");  
    }); 
  });

 
//  Check a href for an anchor. If exists, and in document, scroll to it.
function scroll_if_anchor(href) {
  href = typeof(href) == "string" ? href : $(this).attr("href");
  
  // You could easily calculate this dynamically if you prefer
  var fromTop = 80;
  // If our Href points to a valid, non-empty anchor, and is on the same page
  if(href.indexOf("#") == 0) {
      var $target = $(href);
      if($target.length) {
          $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
          if(history && "pushState" in history) {
              history.pushState({}, document.title, window.location.pathname + href);
              return false;
          }
      }
  }
}    

// When our page loads, check to see if it contains and anchor
scroll_if_anchor(window.location.hash);

// Intercept all anchor clicks
$("body").on("click", "a", scroll_if_anchor);
const numofnavlist = document.getElementsByClassName("navlist");


for(let i=0; i< numofnavlist.length; i++){
  numofnavlist[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  })
}

var sections = $('section')
  , nav = $('#navigation-bar')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
        if(cur_pos == 0){
          top = $(this).offset().top
        }
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});




});

  