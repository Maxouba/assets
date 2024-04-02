// script.js
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const numberOfSlide = slides.length;

let position = 0; // Initialiser la position de départ


newDots();



arrowLeft.addEventListener("click", function () {
    if (position == 0) {
        position = numberOfSlide - 1;
    }

    else {
        position--;
    }
        changeImage(position);
});

arrowRight.addEventListener("click", function () {
    if (position == numberOfSlide - 1) {
        position = 0;
    } else {
            position++;
    }
    changeImage(position);
});

function newDots(){
    const dots = document.querySelector(".dots");	
   for (let index = 0; index < slides.length; index++) {
       // Je crée un dot à chaque fois qu'un élément est ajouté dans la boucle
       const dot= document.createElement("div");
       dot.setAttribute("class", "dot");
       if(index===0){
        dot.classList.add('dot_selected')
       }
       dots.appendChild(dot);
   }
}


function changeImage(position){
    const dot = [...document.querySelectorAll(".dot")];
    dot.forEach(function(element){
        element.classList.remove('dot_selected')
    })	
    dot[position].classList.add('dot_selected')

    const element = slides[position];
        //console.log(element);
    const img = document.querySelector(".banner-img");
    img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);
  
    const p = document.querySelector(".banner-txt");
    p.innerHTML= element.tagLine;
}