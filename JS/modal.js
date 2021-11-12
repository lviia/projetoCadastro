function abreModalErro(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add('mostrar');
  modal.addEventListener('click', (e) => {
    if (e.target.id == modalID || e.target.className == 'botaoModalErro') {
      modal.classList.remove('mostrar');
    }
  });
}






