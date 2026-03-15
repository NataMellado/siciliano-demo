const navTrigger = document.querySelector('.navTrigger');
const mainListDiv = document.getElementById('mainListDiv');
const navLinks = document.querySelectorAll('.navlinks li');

// Estado inicial mainList
gsap.set(mainListDiv, { 
    clipPath: "inset(0 0 100% 0)", 
    visibility: "hidden", 
    pointerEvents: "none" 
});
gsap.set(navLinks, { opacity: 0, y: 30 });

// Timeline de GSAP
const menuTl = gsap.timeline({ paused: true, reversed: true, defaults: { ease: "power4.inOut" } });

// Animación del Botón X
menuTl
      .set(mainListDiv, { visibility: "visible", pointerEvents: "all" })

      .to(".line.middle", { duration: 0.2, opacity: 0, x: 8 }, "start")
      .to(".line.top", { duration: 0.3, attr: { d: "m 30,30 l 40,40" }, ease: "power2.inOut" }, "start")
      .to(".line.bottom", { duration: 0.3, attr: { d: "m 70,30 l -40,40" }, ease: "power2.inOut" }, "start")

// Abrir Menú
      .to(mainListDiv, { 
          duration: 0.8, 
          clipPath: "inset(0 0 0% 0)",            
      }, "-=0.2")

// Entrada de links
      .to(navLinks, {
          duration: 0.4,
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power2.out"
      }, "-=0.6");

// Lógica de clic
navTrigger.addEventListener('click', () => {
    menuTl.reversed() ? menuTl.play() : menuTl.reverse();
});

// Cerrar menú al hacer clic en un link
navLinks.forEach(link => {
    link.addEventListener('click', () => menuTl.reverse());
});