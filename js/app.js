$(function(){
   //tooltip
   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//tooltip ends

//Home page starts
    
    $('#banner').slick(
        {
            arrows:false,
            dots:true,
            dotsClass:"banner-dots container",
            
            
        }
    );

    //New product Slider
    $('.newProductSlider').slick({
        slidesToShow:4,
        prevArrow: '#productSLiderLeftArrow',
        nextArrow:'#productSliderRightArrow',
        responsive: [
            {
              breakpoint: 991.99,
              settings: {
                slidesToShow: 3,

                
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  
                }
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  
                }
              },
            
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
       
    })

    //Flash Sale Slider
    $('.sliding').slick(
      {
          arrows:false,
          dots:true,
          dotsClass:"banner-dots container",
          slidesToShow:2,
          responsive: [
            {
              breakpoint: 991.99,
              settings: {
                slidesToShow: 1,

                
              }
              
            },
           
          
          ]
          
          
      }
  );
  $(".timer")
  .countdown("2024/01/01", function(event) {
    $(".days").html(event.strftime('%D '));
    $(".hours").html(event.strftime('%H '));
    $(".mins").html(event.strftime('%M '));
    $(".sec").html(event.strftime('%S '));
    // $(this).text(
    //   event.strftime('%D days %H:%M:%S')
    // );
  });

  //SpecialOffer
  new VenoBox({
    selector: ".specialOffer-video"
});

//Latest News
$('.slideBar').slick(
  {
      arrows:false,
      dots:true,
      dotsClass:"banner-dots container",
      slidesToShow:4,
      responsive: [
        {
          breakpoint: 991.99,
          settings: {
            slidesToShow: 1,

            
          }
          
        },
       
      
      ]
      
      
  }
);

//home page ends

//about page starts

//Customer Service Starts
new VenoBox({
  selector: ".ourStory-video"
});

//Customer Service Ends

//leadership starts

$('.leaderShipSlider').slick({
  slidesToShow:4,
  prevArrow: '#productSLiderLeftArrow',
  nextArrow:'#productSliderRightArrow',
  responsive: [
      {
        breakpoint: 991.99,
        settings: {
          slidesToShow: 3,

          
        }
      },
      {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            
          }
        },
      
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
 
})

//leadership ends

//Customer Review Starts
  
  $('.customer_slide').slick(
    {
        arrows:false,
        dots:true,
        dotsClass:"banner-dots container",
        slidesToShow:1,
        responsive: [
          {
            breakpoint: 991.99,
            settings: {
              slidesToShow: 1,

              
            }
            
          },
         
        
        ]
        
        
    }
);

//Customer Review Ends

//Instagram Starts
  
$('.Insta_slider').slick(
  {
      arrows:false,
      dots:true,
      dotsClass:"banner-dots container",
      slidesToShow:6,
      responsive: [
        {
          breakpoint: 991.99,
          settings: {
            slidesToShow: 1,

            
          }
          
        },
       
      
      ]
      
      
  }
);

//Instagram Ends

//about page ends

//Shop page starts

//All product Starts
$('.AllProduct_slider').slick(
  {
    rows:3,
    slidesPerRow:4,
    speed:1000,
    dots:true,
    prevArrow: `.left`,
  nextArrow: `.right`,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          rows:2,
          slidesPerRow:3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          rows:2,
        slidesPerRow:2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          rows:2,
        slidesPerRow:2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          rows:2,
        slidesPerRow:2,
        }
      },

    ]
      
      
      
  }
);


//All product ends

//Shop page ends

//Details Page starts
//ProductView Starts
$('.mainSlider').slick({
  arrows:false,
  asNavFor: '.subSlider',
  fade:true,
});

$('.subSlider').slick({
  arrows:true,
  prevArrow: '.leftArrow',
  nextArrow:'.rightArrow',

  slidesToShow: 5,
  asNavFor: '.mainSlider',
  centerMode: true,
  focusOnSelect:true,

});



//ProductView Ends
//Details Page ends




      
    
})