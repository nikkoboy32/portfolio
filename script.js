$(document).ready(function(){

 $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})



}); 