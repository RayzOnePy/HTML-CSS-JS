const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const menuBurger = document.querySelector(".header__burger");
const menuWrapper = document.querySelector(".header__wrapper");


menuBurger.addEventListener("click", function(){
    document.body.classList.toggle("lock")
    menuBurger.classList.toggle("active")
    menuWrapper.classList.toggle("active")
})

const navLinks = document.querySelectorAll(".header__link");

navLinks.forEach(navLink => {
  navLink.addEventListener("click", function(){
    document.body.classList.remove("lock")
    menuBurger.classList.remove("active")
    menuWrapper.classList.remove("active")
  })
})
