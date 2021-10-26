function scrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){

        event.preventDefault();

        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        
        /*const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });*/
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
scrollSuave();

function animacaoScroll() {

    const section = document.querySelectorAll('.js-scroll');
    if (section.length) {

        const meiaTela = window.innerHeight * 0.3;

        function animaScroll() {
            section.forEach((section) => {

                const sectionTop = section.getBoundingClientRect().top;
                const visivel = (sectionTop - meiaTela) < 0;

                if (visivel) {
                    section.classList.add('ativo');
                }
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}

animacaoScroll();
   
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

var slideIndex = 1;
showSlides(slideIndex);
 
function plusSlides(n) {
    showSlides(slideIndex += n);
}
 
function currentSlide(n) {
    showSlides(slideIndex = n);
}
 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
   
   //Auto Slide   if you need auto slide ,remove the commit ""
   
   
   
 /* var slideIndex = 0;
  showSlides();
   
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 10000); 
  }

*/

var slideIndex = 1;
showSlides(slideIndex);
 
function plusSlides(n) {
    showSlides(slideIndex += n);
}
 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

