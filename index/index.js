var botaoAdicionar = document.querySelector("#adicionaCarta");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    console.log(form);
    var Cartas = obtemCartaDoFormulario(form);


    adicionaCartaNaTabela(Cartas);

    form.reset();

});

function obtemCartaDoFormulario(form) {

    var Cartas = {
        nome: form.nome.value,
        preco: form.preco.value,
        imagemCarta: form.imagemCarta.value,

    }

return Cartas;

}


function adicionaCartaNaTabela(Cartas){
    var CartasTr = montaTr(Cartas);
    var tabela = document.querySelector("#tabela-Cartass");
    tabela.appendChild(CartasTr);

}




function montaTr(Cartas) {
    var CartasTr = document.createElement("tr");
    CartasTr.classList.add("Cartas");

    var criaImagem = document.createElement("IMG");
    criaImagem.setAttribute("src", Cartas.imagemCarta);
    criaImagem.setAttribute("width", "110");
    criaImagem.setAttribute("height", "160");
    

    CartasTr.appendChild(montaTd(Cartas.nome, "info-nome"));
    CartasTr.appendChild(montaTd(Cartas.preco, "info-preco"));
    CartasTr.appendChild(montaTd("", "info-imagemCarta")).appendChild(criaImagem);

    return CartasTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    
    return td;
}
