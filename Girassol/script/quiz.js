
const quizDados = [
    { pergunta: "O girassol é conhecido por estar virado para a(o)...", opcoes: ["Sol", "Lua", "Marte", "Terra"], resposta: 0 },
    { pergunta: "Qual o nome científico do girassol?", opcoes: ["Felis catus", "Homo sapiens", "Helianthus Annus", "Canis lupus familiaris"], correto: 2 },
    { pergunta: "Sobre o mito grego sobre girassol, qual o nome da ninfa?", opcoes: ["Nix", "Clítia", "Helena", "Laís"], resposta: 1 },
    { pergunta: "Que outro nome poderia ser usado para se referir ao girassol?", opcoes: ["Flor da Lua", "Flor gigante", "Flor do céu", "Flor da sorte"], resposta: 1 },
    { pergunta: "O girassol pode ser usado de máteria prima para ...", opcoes: ["Carne", "Vidro", "Abelha", "Óleos comestível"], resposta: 3 },
    { pergunta: "Quanto tempo um girassol vive em média?", opcoes: ["10 anos", "1000 anos", "1 ano", "100 anos"], resposta: 2 },
    { pergunta: "O maior girassol do mundo mede ...", opcoes: ["8,25m", "8,75m", "9,25m", "9,75m"], resposta: 1 },
    { pergunta: "Qual o significafo de girassol?", opcoes: ["Felicidade", "Alegria", "Amor", "Todas as anteriores"], resposta: 3 },
    { pergunta: "O girassol pode ser usado para atrair ...", opcoes: ["Abelhas", "O Apocalipse", "Thanos", "Mordekaiser"], resposta: 0 },
    { pergunta: "O girassol pode ser usado na produção de ...", opcoes: ["Petróleo", "Carvão natural", "Gás natural", "Biodiesel"], resposta: 3 },
    { pergunta: "De qual planta o nosso site trata?", opcoes: ["Cravo", "Dama da Noite", "Girassol", "Rosa"], resposta: 2 },
    { pergunta: "Qual dessas cores remetem a um girassol?", opcoes: ["Amarelo", "Azul", "Violeta", "Verde"], resposta: 0 },
    { pergunta: "O que é um Girassol?", opcoes: ["Unidade de medida", "Carro", "Pedra", "Flor"], resposta: 3 },
    { pergunta: "Quantas espécies de Girassol existem?", opcoes: ["60", "70", "80", "90"], resposta: 1 },
    { pergunta: "O que o girassol faz o dia todo?", opcoes: ["dança", "toma sorvete", "fotossíntese", "viaja para Paris"], resposta: 2 },
    { pergunta: "Qual o continente de origem do Girassol?", opcoes: ["Ásia e Antártica", "África e Sul da Europa", "América do Norte e Central", "Sul da Europa e Oceania"], resposta: 2 },
    { pergunta: "O Girassol presisa de ...", opcoes: ["Sol e Aguá", "Fogo e Gelo", "Pizza e Strogonoff", "Maça e Laranja"], resposta: 0 },
    { pergunta: "Em qual estação do ano plantamos girassois?", opcoes: ["Primavera", "Verão", "Outono", "Inverno"], resposta: 1 },
    { pergunta: "Até que temperatura o girrasol pode suportar?", opcoes: ["70 graus", "60 graus", "50 graus", "40 graus"], resposta: 3 },
    { pergunta: "O girrasol possui um unica flor?", opcoes: ["não", "sim"], resposta: 0 }
];

const iniciar = document.getElementById("iniciar");
const quizJogo = document.getElementById("quiz-jogo");
const quizresultado = document.getElementById("quiz-resultado");
const iniciarQuiz = document.getElementById("iniciar-quiz");
const numeroPerguntas = document.querySelector(".contador");
const pergunta = document.querySelector(".pergunta");
const opcoesBox = document.querySelector(".opcoes-box");
const enviar = document.getElementById("enviar");
const corretas = document.getElementById("corretas");
const errados = document.getElementById("errados");
const porcentagem = document.getElementById("porcentagem");
const desempenho = document.getElementById("desempenho");
const pontuacao = document.getElementById("pontuacao");

let respostaCorreta = 0;
let respostaErrada = 0;
let contadorPerguntas = 0;
let tentativa = 0;
let resultado1 = 0.0;
let resultado2;
let escolha = false;
let resultadoDesempenho = "--|--";
let perguntaAtual;
let perguntasDisponiveis = [];
let opcoesDisponiveis = [];

function pegarNovaPergunta() {
    const perguntaAleatoria = perguntasDisponiveis[Math.floor(Math.random() * perguntasDisponiveis.length)];
    numeroPerguntas.innerHTML = "Pergunta: " + (contadorPerguntas + 1) + " de " + 5;
    perguntaAtual = perguntaAleatoria;
    pergunta.innerHTML = perguntaAtual.pergunta;
    const posicao1 = perguntasDisponiveis.indexOf(perguntaAleatoria);
    perguntasDisponiveis.splice(posicao1, 1);
    console.log(perguntasDisponiveis);
    const opcaoLida = perguntaAtual.opcoes.length;
    for (let i = 0; i < opcaoLida; i++) {
        opcoesDisponiveis.push(i);
    }
    opcoesBox.innerHTML = '';
    for (let i = 0; i < opcaoLida; i++) {
        const opcaoAleatoria = opcoesDisponiveis[Math.floor(Math.random() * opcoesDisponiveis.length)];
        const posicao2 = opcoesDisponiveis.indexOf(opcaoAleatoria);
        opcoesDisponiveis.splice(posicao2, 1);
        const opcao = document.createElement("div");
        opcao.innerHTML = perguntaAtual.opcoes[opcaoAleatoria];
        opcao.id = opcaoAleatoria;
        opcao.className = "opcao";
        opcoesBox.appendChild(opcao);
        opcao.setAttribute("onclick", "pegarResultado(this)");
    }
    contadorPerguntas++;
}

function pegarResultado(perguntaEscolhida) {
    const id = parseInt(perguntaEscolhida.id);
    if (id === perguntaAtual.resposta) {
        escolha = true;
    } else {
        escolha = false;
    }
    return escolha;
}

enviar.addEventListener("click", () => {
    if (contadorPerguntas === 5) {
        if (escolha === true) {
            respostaCorreta++;
        } else {
            respostaErrada++;
        }
        quizJogo.classList.add("esconder");
        quizresultado.classList.remove("esconder");
        tentativa++;
        resultadoQuiz();
        if (tentativa == 1) {
            alert(`Na sua primeira tentativa, você acertou ${resultado1} % das questões.`);
            desempenho.innerHTML = resultadoDesempenho;
        } else if (tentativa > 1) {
            if (resultado1 > resultado2) {
                alert("Seu desempenho aumentou.");
                desempenho.innerHTML = "aumentou";
            } else if (resultado1 == resultado2) {
                alert("Seu desempenho continua igual.");
                desempenho.innerHTML = "igual";
            } else {
                alert("Seu desempenho diminuiu.");
                desempenho.innerHTML = "diminuiu";
            }
        }
    } else {
        pegarNovaPergunta();
        if (escolha === true) {
            respostaCorreta++;
        } else {
            respostaErrada++;
        }
    }
});

function resultadoQuiz() {
    corretas.innerHTML = respostaCorreta;
    errados.innerHTML = respostaErrada;
    resultado1 = (respostaCorreta * 100) / 5;
    porcentagem.innerHTML = resultado1;
    pontuacao.innerHTML = respostaCorreta + "/5";
}

function atribuirPerguntasDisponiveis() {
    const totalPerguntas = quizDados.length;
    for (let i = 0; i < totalPerguntas; i++) {
        perguntasDisponiveis.push(quizDados[i])
    }
}

function jogarNovamente() {
    iniciar.classList.add("esconder");
    quizJogo.classList.remove("esconder");
    contadorPerguntas = 0;
    respostaCorreta = 0;
    respostaErrada = 0;
    pegarNovaPergunta();
    atribuirPerguntasDisponiveis();
    resultado2 = resultado1;
}

iniciarQuiz.addEventListener("click", () => {
    iniciar.classList.add("esconder");
    quizJogo.classList.remove("esconder");
    atribuirPerguntasDisponiveis();
    pegarNovaPergunta();
})
