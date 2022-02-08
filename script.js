const color1 = document.querySelector("#color-1");
const color2 = document.querySelector("#color-2");
const colors = document.querySelector("h3");
const body = document.querySelector("#gradient");
const copyColor = document.querySelector("#copy-color");

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    copyColor.textContent = `${body.style.background} ;`;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



