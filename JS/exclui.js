function excluir(e, id) {
    let conteudo = JSON.parse(localStorage.getItem('conteudo')) || [];
    idSelected = id;
    let tr = e.parentNode.parentNode;
    tr.remove();
    const item = conteudo[idSelected];
    const index = conteudo.indexOf(item);

    if (index > -1) {
        conteudo.splice(index, 1);
        localStorage.removeItem('conteudo');
    }
    localStorage.setItem('conteudo', JSON.stringify(conteudo));
}







