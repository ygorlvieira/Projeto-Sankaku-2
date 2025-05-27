let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
/* Slides */

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 4000,  
    }, 
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});

// Accordion functionality
    const accordions = document.querySelectorAll('.accordion-title');

    accordions.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            parent.classList.toggle('active');
        });
    });


    //Modal functionality

 
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const slides = document.querySelectorAll(".gallery .swiper-slide img");
    const closeBtn = document.querySelector(".modal .close");
    const prevBtn = document.querySelector(".modal .prev");
    const nextBtn = document.querySelector(".modal .next");

    let currentIndex = 0;

    function showModal(index) {
        modal.style.display = "block";
        modalImg.src = slides[index].src;
        currentIndex = index;
    }

    slides.forEach((img, index) => {
        img.addEventListener("click", () => {
            showModal(index);
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showModal(currentIndex);
    });

    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % slides.length;
        showModal(currentIndex);
    });

// impedir rolamento da página ao abrir o modal
document.addEventListener("wheel", function(event) {
    if (modal.style.display === "block") {
        event.preventDefault();
    }
}, { passive: false });
