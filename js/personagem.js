export default class Personagem {
  constructor() {
    this.vida = 10;
    this.forca = 0;
    this.sorte = 0;
   

    this.coragem = 0;
    this.investigacao = 0;
    this.agilidade = 0;


    this.inventario = [];
  }

  aplicarItem(item) {
    this.inventario.push(item.nome);

    if (item.efeito) {
      if (item.efeito.includes("vida")) {
        const valor = parseInt(item.efeito.match(/[+-]?\d+/)[0]);
        this.vida += valor;
      }
      if (item.efeito.includes("força")) {
        const valor = parseInt(item.efeito.match(/[+-]?\d+/)[0]);
        this.forca += valor;
      }
      if (item.efeito.includes("sorte")) {
        const valor = parseInt(item.efeito.match(/[+-]?\d+/)[0]);
        this.sorte += valor;
      }



       if (item.efeito.includes("coragem")) {
        const valor = parseInt(item.efeito.match(/[+-]?\d+/)[0]);
        this.coragem += valor;
      }

       if (item.efeito.includes("investigacao")) {
        const valor = parseInt(item.efeito.match(/[+-]?\d+/)[0]);
        this.investigacao += valor;
      }

      if (item.efeito.includes("agilidade")) {
        const valor = parseInt(item.efeito.match(/[+-]?\d+/)[0]);
        this.agilidade += valor;
      }




    }

    this.atualizarFicha();
  }






/* Atualiza a Ficha a cada interacao - Alterado para fazer quabra de linha: */

atualizarFicha() {
  const atributosEl = document.getElementById("atributos");
  atributosEl.innerHTML =
    `Vida: ${this.vida}<br>` +
    `Força: ${this.forca}<br>` +
    `Sorte: ${this.sorte}<br>` +
    `Coragem: ${this.coragem}<br>` +
    `Investigação: ${this.investigacao}<br>` +
    `Agilidade: ${this.agilidade} <br>`;

  const lista = document.getElementById("inventario");
  lista.innerHTML = "";
  this.inventario.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    lista.appendChild(li);
  });
}




}
