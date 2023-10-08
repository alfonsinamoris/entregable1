//menu
function toggleMenu(){
    document.querySelector(".navbar").classList.toggle("show");
}

//menu perfil
function togglePerfil(){
    document.querySelector(".nav-perfil").classList.toggle("show");
}

function toggleCarrito(){
    document.querySelector(".desp-carrito").classList.toggle("show");
}

//carrusel
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper1 i ");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {

    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});

//simular porcentaje de carga 
document.addEventListener("DOMContentLoaded", function () {
    // Simula la carga de la página
    let cargaActual = 0;
    const porcentajeCarga = document.getElementById("porcentaje-carga");

    const simularCarga = setInterval(function () {
        cargaActual += 1;
        porcentajeCarga.innerText = cargaActual + "%";

        if (cargaActual >= 100) {
            clearInterval(simularCarga);
            // Oculta el spinner y el porcentaje de carga una vez que la carga esté completa
            document.querySelector(".spinner-container").style.display = "none";
        }
    }, 50);
});



