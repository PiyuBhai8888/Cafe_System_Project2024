$(document).ready(function(){

    $('#menu-bar').click(function(){

        $(this).toggleClass('fa-time');
        $('.narbar').toggleClass('nav-toggle');
    });



    $('#menu2-bar').click(function(){

        $(this).toggleClass('fa-time');
        $('.narbar').toggleClass('nav-toggle');
    });

    $('#menu3-bar').click(function(){

        $(this).toggleClass('fa-time');
        $('.narbar').toggleClass('nav-toggle');
    });
    $('#menu4-bar').click(function(){

        $(this).toggleClass('fa-time');
        $('.narbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        
        $('#menu-bar').removeClass('fa-times');
        $('#menu2-bar').removeClass('fa-times');
        $('#menu3-bar').removeClass('fa-times');
        $('#menu4-bar').removeClass('fa-times');
        $('.narbar').removeClass('nav-toggle');

        // scroll spy 

        $('section').each(function(){

            let top = $(window).scrollTop();
            let offset = $(this).offset().top-200;
            let height = $(this).height();
            let id = $(this).attr('id');
            
            if(top > offset && top < offset + height){
                $('.narbar ul li a').removeClass('active');
                $('.navbar').find('[href="#${id}"]').addClass('active');
            }
        })

    });

    document.querySelector('#search-icon').onclick = () =>{
        document.querySelector('#search-form').classList.toggle('active');
      }
      
      document.querySelector('#close').onclick = () =>{
        document.querySelector('#search-form').classList.remove('active');
      }
     
    $('.menu .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src= $(this).attr('data-src');

        $('#menu-img').attr('src', src);
    });


    $('.menu2 .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src= $(this).attr('data-src');

        $('#menu2-img').attr('src', src);
    });

    $('.menu3 .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src= $(this).attr('data-src');

        $('#menu3-img').attr('src', src);
    });

    $('.menu4 .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src= $(this).attr('data-src');

        $('#menu4-img').attr('src', src);
    });
  });














  let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;
