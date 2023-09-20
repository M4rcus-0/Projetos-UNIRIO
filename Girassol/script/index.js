/* ========= X Popup X ========= */
var popup = document.getElementById("popup");

function abrirPopup() {
    popup.classList.add("ativo");
}

function fecharPopup() {
    popup.classList.remove("ativo");
}


/* ========= X Config X ========= */

let pagina = document.getElementById("pagina");

document.getElementById("menor").addEventListener("click", function () {
    pagina.style.fontSize = "10px";
    localStorage.setItem("font", "10px");
})

document.getElementById("medio").addEventListener("click", function () {
    pagina.style.fontSize = "16px";
    localStorage.setItem("font", "16px");
})

document.getElementById("maior").addEventListener("click", function () {
    pagina.style.fontSize = "20px";
    localStorage.setItem("font", "20px");
})

document.getElementById("roboto").addEventListener("click", function () {
    pagina.style.fontFamily = "'Roboto', 'sans-serif'";
    localStorage.setItem("family", "'Roboto', 'sans-serif'");
})

document.getElementById("poppins").addEventListener("click", function () {
    pagina.style.fontFamily = "'Poppins','sans-serif'";
    localStorage.setItem("family", "'Poppins','sans-serif'");
})
document.getElementById("monospace").addEventListener("click", function () {
    pagina.style.fontFamily = "'Space Mono', 'monospace'";
    localStorage.setItem("family", "'Space Mono', 'monospace'");
})

document.getElementById("azul").addEventListener("click", function () {
    pagina.style.background = "#0abde3";
    localStorage.setItem("background", "#0abde3");
})

document.getElementById("preto").addEventListener("click", function () {
    pagina.style.background = "#000000";
    localStorage.setItem("background", "#000000");
})

document.getElementById("vermelho").addEventListener("click", function () {
    pagina.style.background = "#ee5253";
    localStorage.setItem("background", "#ee5253");
})

pagina.style.fontSize = localStorage.getItem("font");
pagina.style.fontFamily = localStorage.getItem("family");
pagina.style.background = localStorage.getItem("background");

let opcoes = document.getElementById("opcoes");

function abrirConfig() {
    opcoes.classList.add("abrir");
}

function fecharConfig() {
    opcoes.classList.remove("abrir");
}