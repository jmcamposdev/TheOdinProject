const input_sobremi = document.querySelector(".input_sobremi");
const input_about = document.querySelector('.input_about')
const slider_sobremi = document.querySelector(".sobremi_slider")
const slider_about = document.querySelector(".about_slider")

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

const ceropxsobremi = ()=> {
    slider_sobremi.classList.add("ceropx");
}
const ceropxabout = ()=> {
    slider_about.classList.add("ceropx");
}

const input = ()=>{
    input_sobremi.addEventListener('click', () => {
        if (slider_sobremi.classList.contains("hidden")) {
            slider_sobremi.classList.remove("hidden");
            slider_sobremi.classList.remove("altura");
            slider_sobremi.classList.remove("ceropx");
            slider_sobremi.classList.add("ampliar");
            input_sobremi.style.backgroundColor = "#FF5C5C";
        } else {
            slider_sobremi.classList.remove("ampliar");
            slider_sobremi.classList.add("hidden");
            input_sobremi.style.backgroundColor = "#00CF58";
            setTimeout(ceropxsobremi, 0780);
        }
    })
    input_about.addEventListener('click', ()=>{
        if (slider_about.classList.contains("hidden")) {
            slider_about.classList.remove("hidden");
            slider_about.classList.remove("altura");
            slider_about.classList.remove("ceropx");
            slider_about.classList.add("ampliar");
            input_about.style.backgroundColor = "#FF5C5C"
        } else {
            slider_about.classList.remove("ampliar");
            slider_about.classList.add("hidden");
            input_about.style.backgroundColor = "#00CF58";
            setTimeout(ceropxabout, 0780);
        }
    })
}
input();

// //<div class="sobremi_container container">
// <h2 class="negro h2">Sobre Mi</h2>
// <p class="negro pi">Me llamo José María Campos Trujillo.</p>
// <p class="negro pi">Tengo 17 años</p>
// <p class="negro pi">Dispogo de la titulacion de primaria y segundaria, actualmente estoy acabando el segundo año del grado medio en Sistemas Microinformaticos y Redes. <br>
// No dispongo de tranporte propio pero no tendria nigun problemas en transportarme a cualquir ubicacion. <br>
// Tengo experiencia en: App Informatica Torre del Mar (6meses)
// </p>
// <a href="img/José María .pdf" title="Download" download="Jose Maria CV" target="_blank">Descargar CV</a>
// </div></p>



//  <div class="about_slider hidden">
// <p class="negro pi">Soy José María,</p>
// <p class="negro pi">Un estudiante de grado medio el cual tiene gran motivacion en aprender y emprender nuevos proyectos. <br></p>
// <p class="negro pi">Me considero una persona con una gran persistencia y motivacion en lograr grandes azañas.Siempre listo para nuevos retos</p>
// <p class="negro pi">Algunas de mis cualidades son: HTML, CSS, JavaScript.</p>
// <div class="about_skills">
//     <div class="skills">
//         <img src="img/html5.svg" alt="">
//     </div>
//     <div class="skills">
//         <img src="img/css-3.svg" alt="">
//     </div>
//     <div class="skills">
//         <img src="img/javascript.svg" alt="">
//     </div>
// </div>
// </div> 



{/* <div class="card_container container">
            <div class="card">
                <img class="card_img" src="img/portfolio.png" alt="">
                <div class="card_description-izquierda">
                    <h3 class="blanco">Mi Portfolio</h3>
                    <p class="blanco">Landing Page: HTML,CSS,JS</p>
                    <a href="" class="blanco card_description-a" >Website</a>
                </div>
            </div>
            <div class="card">
                <img class="card_img" src="img/berebere.png" alt="">
                <div class="card_description-derecha">
                    <h3 class="blanco">Berebere</h3>
                    <p class="blanco">Landing Page: HTML,CSS,JS</p>
                    <a href="" class="blanco card_description-a" >Website</a>
                </div>
            </div> 
            <div class="card">
                <img class="card_img" src="img/calculadora.png" alt="">
                <div class="card_description-izquierda">
                    <h3 class="blanco">Calculadora</h3>
                    <p class="blanco">Landing Page: HTML,CSS,JS</p>
                    <a href="" class="blanco card_description-a" >Website</a>
                </div>
            </div>
            <div class="card">
                <img class="card_img" src="img/newlands.png" alt="">
                <div class="card_description-derecha">
                    <h3 class="blanco">Newlands</h3>
                    <p class="blanco">Landing Page: HTML,CSS,JS</p>
                    <a href="" class="blanco card_description-a" >Website</a>
                </div>
            </div> 

</div> */}

// .card_container{
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     background-color: transparent;
//     max-width: none;
//     gap: 15px;
//     justify-content: center;
    
// }

// .card{
//     position: relative;
//     object-fit: cover;
//     overflow: hidden;
//     font-size: 14px;
//     border-radius: 10px;
//     height: 200px;
// }

// .card_img{
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: all 1s;
//     border-radius: 10px;
// }

// .card_description-izquierda{
//     position: absolute;
//     background-color: rgba(0, 0, 0, 0.7);
//     bottom: 0px;
//     right: 500px;
//     height: 100%;
//     width: 100%;
//     opacity: 0;
//     transition: all 0.5s;
//     border-radius: 10px;
//     z-index: 1;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     text-align: center;
//     gap: 30px;
// }

// .card_description-derecha{
//     position: absolute;
//     background-color: rgba(0, 0, 0, 0.7);
//     bottom: 0px;
//     left: 500px;
//     height: 100%;
//     width: 100%;
//     opacity: 0;
//     transition: all 0.5s;
//     border-radius: 10px;
//     z-index: 1;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     text-align: center;
//     gap: 30px;
// }

// .card_description-a{
//     background: #353535;
//     color: #f5f5f5;
//     padding: 5px 10px;
//     display: inline-block;
//     margin: 0 auto;
//     text-decoration: none;
//     transition: 0.35s;
// }

// .card_description-a:hover{
//     color: #2a9bec;
// }

// .card:hover .card_img {
//     transition: all 1s;
//     border-radius: 10px;
//     transform: scale(1.2);
// }

// .card:hover .card_description-izquierda {
//     visibility: visible;
//     opacity: 1;
//     transition: all .5s;
//     border-radius: 10px;
//     right: 0px;
// }

// .card:hover .card_description-derecha {
//     visibility: visible;
//     opacity: 1;
//     transition: all .5s;
//     border-radius: 10px;
//     left: 0px;
// }