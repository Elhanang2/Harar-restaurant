
$(document).ready(function(){
    //nav bar toggle function when screen size is small the listed nav
    //bar will be hide and three bars represent nav bar when click list
    //nav bar vertical again click will hide nav bar.
    $(".menu-toggle").click(function(){
        $(".bars").toggleClass("bars-hide");
        $(".times").toggleClass("times-show");
        $("nav ul").toggleClass("active");
    })
 // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};

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


    var slideIndex=0;
    showSlides();
    function showSlides(){
        
        var slides= $(".mySlides");
        var dots=$(".dot");
        for (i=0; i < slides.length; i++){
            slides[i].style.display="none";
        }
        slideIndex++;
        if(slideIndex > slides.length){
            slideIndex = 1;
        }
        for (i=0; i < dots.length; i++){
            dots[i].className =dots[i].className.replace("active","");
        }
        slides[slideIndex-1].style.display ="block";
        dots[slideIndex-1].className +=" active";
        setTimeout(showSlides, 2000);
    }

  //Click function to load breakfast menu from another html page
    $('a').click(function(event){
        event.preventDefault();
        $("a").removeClass("clicked-class")
        this.className="clicked-class";
        //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
        if($(event.target).is("#breakfast-menu")){
            $('#eachMenu-page').load('/breakfast.html');
            console.log("breakfast");
        }
        else if($(event.target).is("#lounch-menu")){
            $('#eachMenu-page').load('/lunch.html');
            console.log("lounch");
        }else if($(event.target).is("#dinner-menu")){
            $('#eachMenu-page').load('/dinner.html');
            console.log("dinner");
        }
    })
 // This function works on mouse over menu box and the box will open like a book
    $("#book").on("mouseover", function() {
        
        $("#book").addClass('permahover');
    });
 //when scrollup the window and reaches some where in the middle of the page the menu box will be closed 
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= ($("#book")+500) ) {
            $("#book").removeClass("permahover");
            // $("#book").addClass("permahover");
        } else  {
            
        }
    });
    new CircleType(document.getElementById('opening-hours-heading')).radius(300);
    
})