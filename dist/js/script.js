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
$("#products .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    animateIn: 'flipInY',
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

//  PC  product OSwl carousel 
$(".it-ems .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    animateIn: 'flipInY',
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
            1200:{
                items:5
            }
           
          
        }

})

// isotope filter
    var $grid = $(".wrap-p").isotope({
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


