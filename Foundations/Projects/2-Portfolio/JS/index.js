const navSlide = ()=>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar__links");

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav__active')

    nav.addEventListener('click', () => {
        nav.classList.remove('nav__active');
    })
    });
}
navSlide();
const navbar = document.querySelector(".navbar")
window.addEventListener("scroll", function () {
    window.scrollY > 10 && (navbar.style.background = `rgba(0, 0, 0, 0.2)`);
    window.scrollY < 10 && (navbar.style.background = `transparent`);
});