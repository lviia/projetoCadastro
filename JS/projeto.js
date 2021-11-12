/*idSelected e editando criados para saber se está editando ou cadastrando, começam sempre false, ou seja, cadastrando*/
let idSelected = null;
let editando = false;

var botaoAdicionar = document.querySelector("#cad");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var formulario = document.querySelector("#form");

  var descricao = validaCampoDesc();
  var evento = validaCampoEvento();
  var parametros = validaCampoParametro();
  var operador = validaCampoOperador();
  var referencia = validaCampoReferencia();

  if (descricao == false || evento == false || parametros == false || operador == false || referencia == false) {
    abreModalErro('modal-principal-erro');

  } else {
    atualizar();
    formulario.reset();
  }
});

function obtemValorDoForm(formulario) {
  return {
    desc: formulario.desc.value,
    evento: formulario.evento.value,
    parametros: formulario.parametros.value,
    operador: formulario.operador.value,
    valor: formulario.valor.value,
    marker: formulario.marker.value,
  };
}


function montaTr() {
  var tabela = document.querySelector(".tbodyClass");
  /*pegando o array*/
  let conteudo = JSON.parse(localStorage.getItem('conteudo')) || [];
  /*percorrendo o array de conteudo e pegando o item na posição i*/
  for (var i = 0; i < conteudo.length; i++) {
    var criaTr = document.createElement("tr");
    var criaTdBotao = document.createElement("td");
    var criaTdCor = document.createElement("td");
    var criaBtnExcluir = document.createElement("input");
    var criaBtnEditar = document.createElement("input");
    criaTr.classList.add("linha");
    criaTr.setAttribute("id", "trs");
    var criaCor = document.createElement("div");
    /*pegando o array da posição i para montar a tr e td*/
    criaTr.appendChild(montaTd(conteudo[i].desc, "desc"));
    criaTr.appendChild(montaTd(conteudo[i].evento, "evento"));
    criaTr.appendChild(montaTd(conteudo[i].parametros, "parametros"));
    criaTr.appendChild(montaTd(conteudo[i].operador, "operador"));
    criaTr.appendChild(montaTd(conteudo[i].valor, "valor"));
    criaTr.appendChild(criaTdCor);
    criaTdCor.setAttribute("class", "marker");
    criaCor.setAttribute("class", "quadradoCor");
    criaCor.setAttribute("corEmHexa", conteudo[i].marker);
    criaCor.style.backgroundColor = conteudo[i].marker;
    criaTdCor.appendChild(criaCor);
    criaTr.appendChild(criaTdBotao);
    criaTdBotao.setAttribute("class", "botoes");
    criaTdBotao.appendChild(criaBtnExcluir);
    criaBtnExcluir.setAttribute("class", "cancel");
    criaBtnExcluir.setAttribute("type", "button");
    criaBtnExcluir.setAttribute("onclick", `excluir(this, ${i})`);
    criaBtnExcluir.setAttribute("id", `${i}`);
    criaTdBotao.appendChild(criaBtnEditar);
    criaBtnEditar.setAttribute("class", "edit");
    criaBtnEditar.setAttribute("type", "button");
    /*o i passado como parâmetro é o índice do array, para saber qual está editando*/
    criaBtnEditar.setAttribute("onclick", `editar(this, ${i})`);
    /*setando o atributo id com o valor do i(índice do array)*/
    criaBtnEditar.setAttribute("id", `${i}`);

    tabela.appendChild(criaTr);
  }
  /*adiciona o array no local storage*/
  localStorage.setItem('conteudo', JSON.stringify(conteudo));
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function atualizar() {
  /*pegando o array*/
  let conteudo = JSON.parse(localStorage.getItem('conteudo')) || [];
  /*criando um novo item que vai dentro do array*/
  const newItem = {
    desc: desc.value,
    evento: evento.value,
    parametros: parametros.value,
    operador: operador.value,
    valor: valor.value,
    marker: marker.value,
  }
  /*1°if cadastrando*/
  if (!editando) {
    conteudo.push(newItem);
    setItemLocalStorage(conteudo);
    /*item ta pegando o id do array conteudo, ai vai entrar no else e remover o item e adicionar um no lugar*/
  } else {
    const item = conteudo[idSelected];
    if (item) {
      conteudo.splice(idSelected, 1, newItem);
      localStorage.removeItem('conteudo');
      setItemLocalStorage(conteudo);
    }
  }
}
/*função para setar o conteudo(array) no local storage*/
const setItemLocalStorage = (conteudo) => {
  localStorage.setItem('conteudo', JSON.stringify(conteudo));
  editando = false;
  idSelected = null;
  location.reload();
}

window.onload = function () {
  montaTr();
}

