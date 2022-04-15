const togBtn = document.querySelector('.nav_btn');
const Menubar = document.querySelector('.menu_bar');
const Closebbt = document.querySelector('.closeBt');
togBtn.addEventListener('click',()=>{
    Menubar.classList.add('open');
})

Closebbt.addEventListener('click',()=>{
     Menubar.classList.remove('open');
})

const proSelect =document.querySelector('.product-select')

proSelect.addEventListener('change', ()=>{
    // alert(proSelect.value)
})



$(document).ready(function(){

// banner carousel

$(".home-banner .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    animateIn: 'flipInX',
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
            },
           
            1500:{
                items:1
            }
        }

})
//  featured product owl carousel 
$(".Oproducts .owl-carousel").owlCarousel({
    loop:false,
    nav:false,
    dots:true,
    animateIn: 'flipInX',
    autoplay:true,
     responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            900:{
                // items:3
            },
            1200:{
                // items:4
            },
           
          
        }

})
//  special offer  owl carousel 
$(".Osp.owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    animateIn:'flipInX',
    autoplay:true,
     responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            700:{
                items:2
            },
            900:{
                items:2
            },
            1200:{
                items:2
            },
           
          
        }

})

//  mobile  product Owl carousel 
$(".Omobiles .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    animateIn: 'flipInX',
    autoplay:true,
     responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }          
        }

})


//  hot selling  product Owl carousel 
$(".hots.owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    animateIn: 'flipInX',
    autoplay:false,
     responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            },
           
           
          
        }

})

//  computer and laps  owlCarousel
$(".Ocomps .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    animateIn: 'flipInX',
    autoplay:false,
     responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }          
          
        }

})

//  blog  owlCarousel
$(".blog .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    animateIn: 'flipInX',
    autoplay:true,
     responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            },
          
           
          
        }

})

// isotope filter
    var $grid = $(".contai-ner").isotope({
        itemSelector:'.product',
       layoutMode:'fitRows'
    })
    $(".product-select").on("click" , "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter:filterValue})
    })


    // isotope for select tag 
    var $grid = $(".wrap-p").isotope({
        itemSelector:'.product',
       layoutMode:'fitRows'
    })
    $(".filter-selector").on('change', function(){
        var filterValue = this.value;
        $grid.isotope({filter:filterValue})
    })




    

})


