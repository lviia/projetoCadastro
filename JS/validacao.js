function validaCampoDesc() {
    var desc = document.querySelector('.text_input');

    if (desc.value == "" || !desc.value > 0) {
        desc.classList.add('invalido');
        return false;
    } else {
        desc.classList.remove('invalido');
        return true;
    }
}

function validaCampoEvento() {
    var select = document.getElementById('evento');
    var valor = select.options[select.selectedIndex].text;

    if (valor == "Nenhum selecionado") {
        select.classList.add('invalido');
        return false;
    } else {
        select.classList.remove('invalido');
        return true;
    }
}

function validaCampoParametro() {
    var select = document.getElementById('parametros');
    var valor = select.options[select.selectedIndex].text;

    if (valor == "Nenhum selecionado") {
        select.classList.add('invalido');
        return false;
    } else {
        select.classList.remove('invalido');
        return true;
    }
}

function validaCampoOperador() {
    var select = document.getElementById('operador');
    var valor = select.options[select.selectedIndex].text;

    if (valor == "Nenhum selecionado") {
        select.classList.add('invalido');
        return false;
    } else {
        select.classList.remove('invalido');
        return true;
    }
}

function validaCampoReferencia() {
    var select = document.getElementById('valor');
    var valor = select.options[select.selectedIndex].text;

    if (valor == "Nenhum selecionado") {
        select.classList.add('invalido');
        return false;
    } else {
        select.classList.remove('invalido');
        return true;
    }
}



