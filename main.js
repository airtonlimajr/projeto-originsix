const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    });
}

/* quando clicar em um item do menu, esconder o menu */
for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
}

/* mudar o header da página quando der scroll */
window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
});


/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
          slidesPerView: 2,
          setWrapperSize: true
        }
      }
    })

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
  )