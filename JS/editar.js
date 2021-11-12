function editar(e, id) {
    /*editando tava false e passa a ser true, idSelected estava null e passa a ter o índice do array*/
    editando = true;
    idSelected = id;

    let tr = e.parentNode.parentNode;
    let desc = tr.cells[0].outerText;
    let evento = tr.cells[1].outerText;
    let parametros = tr.cells[2].outerText;
    let operador = tr.cells[3].outerText;
    let valor = tr.cells[4].outerText;
    let marker = tr.cells[5].children[0].getAttribute("corEmHexa");

    document.querySelector('#desc').value = desc;
    document.querySelector('#evento').value = evento;
    document.querySelector('#parametros').value = parametros;
    document.querySelector('#operador').value = operador;
    document.querySelector('#valor').value = valor;
    document.querySelector('#marker').value = marker;

    let botaoAtualizar = document.querySelector('.botao_cad');
    botaoAtualizar.innerHTML = "Editar";
    desabilitaAcoes();
    desabilitaFiltro();
}

function desabilitaAcoes() {
    let tabela = document.querySelectorAll('table  tbody  input[type="button"]');

    for (var i = 0; i < tabela.length; i++) {
        tabela[i].disabled = !tabela[i].disabled;
    }
    toastEditar();
}

function desabilitaFiltro() {
    let filtro = document.querySelector('#input_filtro');
    filtro.classList.add('invisivel');
}
