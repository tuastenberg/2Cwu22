let layer = document.querySelector(".fade-layer")
layer.addEventListener("click", showmenu)

let button = document.querySelector(".menu-button")
button.addEventListener("click", showmenu)

function showmenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}