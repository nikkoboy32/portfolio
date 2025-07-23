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

new WOW().init();

$("#viewResumeBtn").click(function(e) {
  e.preventDefault();
  $("#Modal").css("display", "block");
});

  // Close modal on clicking the × button
  $(".closee").click(function() {
    $("#Modal").css("display", "none");
  });

  const shuriken = $(".shuriken")

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

  gsap.registerPlugin(ScrollTrigger);

    const directions = [
      'animate__fadeInTopLeft',
      'animate__fadeInTopRight',
      'animate__fadeInBottomLeft',
      'animate__fadeInBottomRight'
    ];

    $('.tech-stack-icons-con section').each(function () {
      const $section = $(this);
      const randomClass = directions[Math.floor(Math.random() * directions.length)];

    
      ScrollTrigger.create({
        trigger: $section[0],
        start: "top 100%", // when section enters 80% of viewport
        once: true, // only run once
        onEnter: () => {
          // Add animate.css fade-in class
          $section.addClass('animate__animated ' + randomClass);

          // When animation ends, remove animate.css and apply float
          $section.one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function () {
            $section.removeClass('animate__animated ' + randomClass);

            // Get any existing animation delay (fallback to 0)
            const delayStr = $section.css('animation-delay') || '0s';
            const delay = parseFloat(delayStr) || 0;

            // Apply floating animation via GSAP
            gsap.to($section[0], {
              y: -15,
              repeat: -1,
              yoyo: true,
              duration: 3,
              ease: "power1.inOut",
              delay: delay
            });
          });
        }
      });
    });

      $(".flip-heading").each(function () {
        const text = $(this).text();
        const spanned = $.map(text.split(""), function (char) {
          return `<span>${char === " " ? "&nbsp;" : char}</span>`;
        }).join("");
        $(this).html(spanned);
      });

      // Step 2: Define a jump animation timeline every 2 seconds
      setInterval(function () {
        $(".flip-heading").each(function () {
          const spans = $(this).find("span");

          spans.each(function (i, el) {
            const tl = gsap.timeline();
            tl.to(el, {
              y: -20,
              duration: 0.5,
              ease: "power2.out",
              delay: i * 0.05
            }).to(el, {
              y: 0,
              duration: 0.5,
              ease: "power2.in"
            });
          });
        });
      }, 2000);

      $(document).on("animationend", ".test-flip", function () {
    gsap.from(".test-flip", {
      opacity: 0,
      rotation: 360,
      duration: 0.6,
      ease: "back.out(1.7)"
    });
  });
}); 