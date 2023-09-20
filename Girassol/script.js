const produtos = [
    {
        id: 0,
        imagem: "imagens/camisa.jpg",
        titulo: "Atlético Mineiro",
        preco: 349.99,
    }, {
        id: 1,
        imagem: "imagens/camisa.jpg",
        titulo: "Botafogo",
        preco: 279.99,
    }, {
        id: 2,
        imagem: "imagens/camisa.jpg",
        titulo: "Corinthians",
        preco: 299.99,
    }, {
        id: 3,
        imagem: "imagens/camisa.jpg",
        titulo: "Cruzeiro",
        preco: 349.99,
    }, {
        id: 4,
        imagem: "imagens/camisa.jpg",
        titulo: "Flamengo",
        preco: 299.99,
    }, {
        id: 5,
        imagem: "imagens/camisa.jpg",
        titulo: "Fluminense",
        preco: 249.99,
    }
];

const categoria = [...new Set(produtos.map((item) => { return item }))]
let i = 0;
document.getElementById('produto-box').innerHTML = categoria.map((item) => {
    var { imagem, titulo, preco } = item;
    return (
        `
        <div class="produto">
            <div class="imagem">
                <img src="${imagem}">
            </div>
            <h3 class="titulo">
                <span class="estrelas">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <br>${titulo}
            </h3>
            <span class="preco">R$ ${preco}</span>` +
        "<button onclick='adicionarProduto(" + (i++) + ")'>Adicionar ao carrinho</button>" +
        `</div>`
    )
}).join('')

var produtosCarrinho = [];

function adicionarProduto(a) {
    produtosCarrinho.push({ ...categoria[a] });
    mostrarCarrinho();
}

function removerProduto(a) {
    produtosCarrinho.splice(a, 1);
    mostrarCarrinho();
}

function mostrarCarrinho() {
    let j = 0, total = 0;
    document.getElementById("quantidade").innerHTML = produtosCarrinho.length;
    if (produtosCarrinho.length == 0) {
        document.getElementById("lista").innerHTML = "Seu carrinho está vazio!";
        document.getElementById("total").innerHTML = "Total a pagar: R$ " + 0;
    } else {
        document.getElementById("lista").innerHTML = produtosCarrinho.map((items) => {
            var { imagem, titulo, preco } = items;
            total = total + preco;
            document.getElementById("total").innerHTML = "Total a pagar: R$ " + total;
            return (
                `<li class="carrinho-item">
                    <img class="item-img" src="${imagem}">
                    <div class="opcoes">
                        <h4>${titulo}</h4>
                        <h5>${preco}</h5>` +
                        "<span onclick='removerProduto(" + (j++) + ")'>remover</span>" +
                    `</div>
                    <div class="quantidade-produto">
                        <span>&#9650;</span>
                        <span class="montante">1</span>
                        <span>&#9660;</span>
                    </div>
                </li>`
            );
        }).join('');
    }
}



let body = document.getElementById('body');
let registro = document.getElementById("registro");
function abrirForm() {
    registro.classList.add("ativo");
    body.classList.add("ativo");
}

function fecharForm() {
    registro.classList.remove("ativo");
    body.classList.remove("ativo");
}

let carrinho = document.getElementById("carrinho");
function abrirCarrinho() {
    carrinho.classList.add("ativo");
    body.classList.add("ativo");
}

function fecharCarrinho() {
    carrinho.classList.remove("ativo");
    body.classList.remove("ativo");

}
