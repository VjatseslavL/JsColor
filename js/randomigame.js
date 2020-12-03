const mainImage = document.querySelector("#img");
const button = document.querySelector(".btn");

const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg"];

button.addEventListener("click", ()=>{
    console.log("hello from script file!");
    let rnd = Math.floor(Math.random() * images.length);
    mainImage.src = images[rnd];
    console.log("Random number:", rnd);
});