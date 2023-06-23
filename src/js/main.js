const form = document.getElementById("form");
const nomeContato = document.getElementById("nome-contato");
const telContato = document.getElementById("tel-contato");

const totalContatos = document.getElementById("total-contatos");
totalContatos.innerHTML = "Comece adicionando seus contatos.";

let nomes = [];
let tel = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarContato();
  atualizarContatos();
});

const formatarNumero = (numeroTel) => {
  if (numeroTel.length === 11) {
    return numeroTel.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (numeroTel.length === 10) {
    return numeroTel.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  } else {
    return numeroTel;
  }
};

const adicionarContato = () => {
  const corpoTabela = document.querySelector("tbody");
  const numeroTelFormatado = formatarNumero(telContato.value);
  corpoTabela.innerHTML += `
      <tr>
          <td>${nomeContato.value}</td>
          <td>${numeroTelFormatado}</td>
      </tr>
  `;
  nomes.push(nomeContato.value);
  tel.push(telContato.value);

  nomeContato.value = "";
  telContato.value = "";
};

const atualizarContatos = () => {
  let somaTotalContatos = nomes.length;
  totalContatos.innerHTML = `Total: ${somaTotalContatos}`;
};

const limpar = () => {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = "";
  nomes.splice(0, nomes.length);
  tel.splice(0, tel.length);
  totalContatos.innerHTML = "Comece adicionando seus contatos.";
};
