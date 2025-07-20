$(document).ready(function(){
  windowWidth = $(window).width()

  $(".burger-btn").on("click", function() {
   $("header").css({
    transform:"translateX(0)",
   })
  })

    $(".close-btn").on("click", function() {
   $("header").css({
    transform:"translateX(-290px)",
   })
  })

 $(window).on("resize", function () {
    if (windowWidth > 1024) {
      $("header").css({ transform: "translateX(0)" }); 
      
    }
  });

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
        1024:{
            items:2
        }
    }
})


  const shuriken = $("#shuriken")

  gsap.timeline({ repeat: -1 })
    .to(shuriken, {
      rotate: "+=360",
      duration: 1.5,
      ease: "power1.inOut"
    })
    .to(shuriken, {
      duration: 1, // pause for 1 second
    });

     gsap.registerPlugin(TextPlugin);

  const roles = [
    "Front-End Developer",
    "WordPress Developer",
    "Website Designer",
    "Website Developer"
  ];

  let index = 0;

  function rotateText() {
    gsap.to("#role", {
      duration: 1,
      text: roles[index],
      ease: "power2.inOut",
      onComplete: () => {
        index = (index + 1) % roles.length;
        setTimeout(rotateText, 1500); // Pause before next word
      }
    });
  }

  rotateText();

  gsap.to(".logo-con h2 span, #footer h3 span" , {
  scale: 1,
  color: "#E17564",
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
  duration: 2
});

 let flipped = false;

  setInterval(() => {
    gsap.to(".v-flip", {
      rotationY: flipped ? 0 : 180,
      duration: 0.6,
      ease: "power2.inOut"
    });
    flipped = !flipped;
  }, 2000);

}); 