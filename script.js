/*------------------------toggle icon navbar------------------*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
/*------------------------scroll section active link------------------*/
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header .navbar a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
/*------------------------sticky navbar------------------*/
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);
/*------------------------remove toggle icon and navbar when click navbar link (scroll)------------------*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};
/*------------------------scroll reveal------------------*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.certifications .heading1', { 
    origin: 'top', 
    distance: '50px', 
    duration: 2000, 
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*------------------------scroll reveal for certifications------------------*/
ScrollReveal().reveal('.certifications-container, .certification-box', { origin: 'bottom' });
ScrollReveal().reveal('.certification-layer h4, .certification-layer p, .certification-layer a', { origin: 'top', interval: 200 });
/*------------------------typed js------------------*/
const typed=new Typed('.multiple-text',{
    strings: ['Full Stack Developer','Web Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});
function showLayer(button) {
    const layer = button.closest('.certification-box').querySelector('.certification-layer');
    layer.classList.add('show');
    setTimeout(() => {
        layer.classList.remove('show');
    }, 3000);
}