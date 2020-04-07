var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// declare setGradient function
// setGradient will be used by our two EventListners below

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
} //end of setGradient


// create EventListeners for input elements
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
// end of create EventListeners for input elements