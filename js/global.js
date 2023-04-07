$('.process_slider.owl').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.clients_slider.owl').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('.testimonial_slider.owl').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.banner_slider.owl').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$(document).ready(function(){
    $('.collapse').on('show.bs.collapse', function () {
        var obj = $("[aria-controls="+$(this).attr('id')+"]").find('.collapse-sign');
        obj.html('<img src="img/minus.png">');
        console.log(obj.html());
      });
      $('.collapse').on('hidden.bs.collapse', function () {
        var obj = $("[aria-controls="+$(this).attr('id')+"]").find('.collapse-sign');
        obj.html('<img src="img/plus.png">')
        console.log(obj.html());
      })
    
    
        $(".hamburger").on("click", function() {
            $(this).parent(".hamburger-wrapper").toggleClass("hamburger-active")
        });

        $('.dropdown_list').click(function(e){
            e.preventDefault();
            let subMenu = $(this).children('.sub_menu_items');

            if(subMenu.css('display')=='none'){
                $(this).children('a').children('i').toggleClass('fa-chevron-right fa-chevron-down')
                subMenu.slideDown();
            }
            else{
                $(this).children('a').children('i').toggleClass('fa-chevron-down fa-chevron-right')
                subMenu.slideUp();
            }
        })

})


// Product js

  const element = document.querySelector('.stepper-demo');
  const visible = document.querySelector('.vs-interseptor');
  
  const logPercentageSeen = () => {
    let centage = percentageSeen();
    let steps =  $('.vs-item');
    let vsTabs = $('.vs-pan')
    let centageOfStep = 100/steps.length;
    var items = Array.from({
    length: steps.length
  }, (_, i) => (i /steps.length* 100).toFixed(0))
  console.log(items)
    console.log(centage,centageOfStep*2,centage <= centageOfStep*2, centage >= centageOfStep*2,steps.eq(2))
    items.forEach((item, index)=>{


   if(centage >= item){
    if(steps.eq(index).hasClass('disabled')){
    steps.eq(index).addClass('active-step').removeClass('disabled')
    vsTabs.eq(index-1).removeClass('show active')
    vsTabs.eq(index).addClass('show active')
    }
   }

   if(centage <= item){
     if(steps.eq(index).hasClass('active-step')){
      steps.eq(index).removeClass('active-step').addClass('disabled')
      vsTabs.eq(index).removeClass('show active')
      vsTabs.eq(index-1).addClass('show active')
     }
   }
  })
    $('.vs-progress').children('.fixed-line').find('.colored-line').css('height', `${centage}%`);
  }
  
  window.addEventListener('scroll', logPercentageSeen);
  
  const percentageSeen = () => {
    // Get the relevant measurements and positions
    if(element.getBoundingClientRect().top <= 150){
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const elementOffsetTop = element.offsetTop - (document.querySelector('.stepper_heading').offsetHeight+80);
    const elementHeight = element.offsetHeight;
  
    // Calculate percentage of the element that's been seen
    const distance = (scrollTop + viewportHeight) - elementOffsetTop;
    const percentage = Math.round(distance / ((viewportHeight + elementHeight) / 100));
    // Restrict the range to between 0 and 100

    return Math.min(100, Math.max(0, percentage));
      
  }else{
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const elementOffsetTop = element.offsetTop - (document.querySelector('.stepper_heading').offsetHeight+80);
      const elementHeight = element.offsetHeight;
    
      // Calculate percentage of the element that's been seen
      const distance = (scrollTop + viewportHeight) - elementOffsetTop;
      const percentage = Math.round(distance / ((viewportHeight + elementHeight) / 100));
      // Restrict the range to between 0 and 100
  
      return Math.min(100, Math.max(0, percentage))/1.5;
  }
}
  
  // Log the initial value to the top before any scrolling has happened
  logPercentageSeen();


