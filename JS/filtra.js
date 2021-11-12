let campoFiltro = document.querySelector("#input_filtro");

campoFiltro.addEventListener("input", function () {
    let tr = document.querySelectorAll(".linha");

    if (this.value.length > 0) {

        for (let i = 0; i < tr.length; i++) {
            let cad = tr[i];
            const tdDesc = cad.querySelector(".desc");
            const desc = tdDesc.textContent;
            const expressao = new RegExp(this.value, "i");

            if (!expressao.test(desc)) {
                cad.classList.add("invisivel");
            } else {
                cad.classList.remove("invisivel");
            }
        }
    } else {
        
        for (let i = 0; 1 < tr.length; i++) {
            tr[i].classList.remove("invisivel");
        }
    }
});