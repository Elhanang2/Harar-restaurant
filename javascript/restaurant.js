
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
    myFunction();
  };

  // Get the navbar
  var navbar = document.getElementById("navigation-bar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
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
    $.get("pages/breakfast.html", function (data) {
        $("#eachMenu-page").html(data);
        $(".front h1").text("breakfast menu");

    });
    
  });
  $(".lunch").on("click", function (e) {
    e.preventDefault();
    $.get("pages/lunch.html", function (data) {
        $("#eachMenu-page").html(data);
        $(".front h1").text("lunch menu");
    });
    
  });

  $(".dinner").on("click", function (e) {
    e.preventDefault();
    $.get("./pages/dinner.html", function (data) {
        $("#eachMenu-page").html(data);
        $(".front h1").text("dinner menu");
    });
    
  });
});

  