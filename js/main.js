document.addEventListener('DOMContentLoaded', function() {
  const modalWarning = new bootstrap.Modal('#aviso-modal');
  modalWarning.show();

  const output = document.querySelector('.output');
  const mainURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
})