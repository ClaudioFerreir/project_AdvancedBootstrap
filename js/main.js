//Modal alert
document.addEventListener('DOMContentLoaded', function() {
  const modalWarning = new bootstrap.Modal('#aviso-modal');
  modalWarning.show();
});

// Cookies Alert
const btnClose = document.getElementById('btn-close-alert');
btnClose.addEventListener('click', function() {
  setTimeout(function() {
    const mensagem = document.getElementById('mensagem-cookies');
    const toast = new bootstrap.Toast(mensagem);
    toast.show();
    }, 3000);
});

// API IBGE
const output = document.querySelector('.output');
const mainURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
const optionEstado = document.querySelector('#estado');
const optionCidade = document.querySelector('#cidade');

window.addEventListener('DOMContentLoaded', function(e) {
  console.log('DOM fully loaded and parsed');
  fetch(mainURL).then((response) => {
    return response.json();
  }).then((json) => {
    /*console.log(json);*/
    for (let i = 0; i < json.length; i++) {
      /*console.log(json[i].nome);*/
      const option = document.createElement('option');
      option.value = json[i].sigla;
      option.textContent = json[i].nome;
      optionEstado.appendChild(option);
    }
  })
    .catch((error) => {
      console.log(error);
    }
    );
});

optionEstado.addEventListener('change', function(e) {
  const estado = e.target.value;
  const url = mainURL + estado + '/municipios';
  /*console.log(url);*/
  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    /*console.log(json);*/
    for (let i=0; i < json.length; i++) {
      /*console.log(json[i].nome);*/
      const optionCity = document.createElement('option');
      optionCity.value = json[i].nome;
      optionCity.textContent = json[i].nome;
      optionCidade.appendChild(optionCity);
    }
  })
    .catch((error) => { 
      console.log(error);
    });
});