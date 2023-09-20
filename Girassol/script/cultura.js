const Movimentos = document.getElementById("n-movimentos");
const comecar = document.getElementById("comecar");
const parar = document.getElementById("parar");
const jogo = document.querySelector(".jogo");
let cartas;
let primeiraCarta = false;
let segundaCarta = false;
let contador = 0;

const lista = [
    { name: "carta1", imagem: "../images/carta1.jpg" },
    { name: "carta2", imagem: "../images/carta2.jpg" },
    { name: "carta3", imagem: "../images/carta3.jpg" },
    { name: "carta4", imagem: "../images/carta4.jpg" },
    { name: "carta5", imagem: "../images/carta5.jpg" },
    { name: "carta6", imagem: "../images/carta6.jpg" },
    { name: "carta7", imagem: "../images/carta7.jpg" },
    { name: "carta8", imagem: "../images/carta8.jpg" },
    { name: "carta9", imagem: "../images/geral.jpg" }
];

const aleatorizador = (tamanho = 4) => {
    let vetorTemporario = [...lista];
    let valorCartas = [];
    tamanho = (tamanho * tamanho) / 2;
    for (let i = 0; i < tamanho; i++) {
        const aleatorio = Math.floor(Math.random() * vetorTemporario.length);
        valorCartas.push(vetorTemporario[aleatorio]);
        vetorTemporario.splice(aleatorio, 1);
    }
    return valorCartas;
};

const posicaoCartas = (valorCartas, tamanho = 4) => {
    jogo.innerHTML = "";
    valorCartas = [...valorCartas, ...valorCartas];
    valorCartas.sort(() => Math.random() - 0.5);
    for (let i = 0; i < tamanho * tamanho; i++) {
        jogo.innerHTML += `
     <div class="carta" data-card-value="${valorCartas[i].name}">
        <div class="antes">?</div>
        <div class="depois">
            <img src="${valorCartas[i].imagem}" class="imagem">
        </div>
     </div>
     `;
    }
    jogo.style.gridTemplateColumns = `repeat(${tamanho},auto)`;
    cartas = document.querySelectorAll(".carta");
    cartas.forEach((carta) => {
        carta.addEventListener("click", () => {
            if (!carta.classList.contains("combinar")) {
                carta.classList.add("virar");
                if (!primeiraCarta) {
                    primeiraCarta = carta;
                    primeiraCartaValue = carta.getAttribute("data-card-value");
                } else {
                    segundaCarta = carta;
                    let segundaCartaValue = carta.getAttribute("data-card-value");
                    if (primeiraCartaValue == segundaCartaValue) {
                        primeiraCarta.classList.add("combinar");
                        segundaCarta.classList.add("combinar");
                        primeiraCarta = false;
                        contador += 1;
                        if (contador == Math.floor(valorCartas.length / 2)) {
                            alert("Você venceu");
                            pararJogo();
                        }
                    } else {
                        let [tempFirst, tempSecond] = [primeiraCarta, segundaCarta];
                        primeiraCarta = false;
                        segundaCarta = false;
                        let delay = setTimeout(() => {
                            tempFirst.classList.remove("virar");
                            tempSecond.classList.remove("virar");
                        }, 900);
                    }
                }
            }
        });
    });
};

comecar.addEventListener("click", () => {
    parar.classList.remove("desaparecer");
    comecar.classList.add("desaparecer");
    inicializador();
});

parar.addEventListener("click", (pararJogo = () => {
    parar.classList.add("desaparecer");
    comecar.classList.remove("desaparecer");
})
);

const inicializador = () => {
    contador = 0;
    let valorCartas = aleatorizador();
    console.log(valorCartas);
    posicaoCartas(valorCartas);
};