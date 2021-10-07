function fade() {
    $('.loadingScreen').fadeOut("slow");
    }
    setTimeout(fade, 2000);  

$('#hamburgermenu').on("click", function(){
    $(".mobilenavigation").slideToggle();
    $(".openMenu").toggle();
    $(".closeMenu").toggle();
});

$('.tab').on("click", function(){
    if($(this).hasClass("tab1")){
        $(".tab1").addClass("active");
        $(".tab2").removeClass("active");
        $(".tab3").removeClass("active");
        $("#tabContent1").css("display", "block");
        $("#tabContent2").css("display", "none");
        $("#tabContent3").css("display", "none");
  }
      else if($(this).hasClass("tab2")){
        $(".tab2").addClass("active");
        $(".tab1").removeClass("active");
        $(".tab3").removeClass("active");
        $("#tabContent2").css("display", "block");
        $("#tabContent1").css("display", "none");
        $("#tabContent3").css("display", "none");
      }
   else if($(this).hasClass("tab3")){
    $(".tab3").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab2").removeClass("active");
    $("#tabContent3").css("display", "block");
    $("#tabContent1").css("display", "none");
    $("#tabContent2").css("display", "none");
  }});

// ALTERNATE CARD HOVER (PAIRED WITH CSS)
$('.casestudyCard').hover(function(){
    $(this).css("background-size", "110%");
    $(this).find('.cardHover').css("height", "100%");
    if($(this).has("p")){
        $(this).find("p").css("display", "inline").animate({opacity:1});
    } else{
        $(this).find("p").css("display", "none");
    }}, function() {
        $(this).find('.cardHover').css("height", "15%");
        if ($(this).has("p") || $(this).find("p").css("opacity") == "1") {
            $(this).find("p").css("display", "none");
        } else {$(this).find("p").css("display", "none");}
        $(this).css("background-size", "100%");
    });

$('.carousel-item').hover(function(){
    $(this).find('.carousel-caption p').css("opacity", "1");},
    function(){$(this).find('.carousel-caption p').css("opacity", "0");
});

// var test = ('IT WORKS!')
// if($(window).width() < 600){
//     console.log(test);
//     $('.casestudyCard').find("p").css("display", "none")
//  } else{}