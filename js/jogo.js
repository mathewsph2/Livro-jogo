/* Regra de Rolagem de dados:

3–6 (fracasso crítico) → perde 2 de vida e 1 de sorte.
7–10 (falha) → perde 2 de vida.
11–14 (sucesso parcial) → ganha +2 de vida.
15–18 (sucesso crítico) → ganha +2 de vida e +1 de força.
*/

import { rolarDados } from "./dados.js";
import Personagem from "./personagem.js";


const personagem = new Personagem();
let historia = {};
let capituloAtual = "1";



// Função para verificar se a vida chegou a 0 ---------------------------------------------------------
function verificarGameOver() {
  if (personagem.vida <= 0) {
    carregarCapitulo("51"); // Vai direto para o capítulo GAME OVER
    return true;
  }
  return false;
}
// ----------------------------------------------------------------------------------------------------



export async function carregarCapitulo(id) {
  if (Object.keys(historia).length === 0) {
    const resposta = await fetch("./json/historia.json");
    historia = await resposta.json();
  }

  capituloAtual = id;
  const capitulo = historia[id];

  const areaHistoria = document.getElementById("area-historia");
  areaHistoria.textContent = capitulo.texto;

  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  const painelDados = document.getElementById("painel-dados");





  // Tratamento de finais - Resultado na tela para o jogador ------------------------
  if (capitulo.final) {
    areaHistoria.textContent += `\n\n🏆 Final: ${capitulo.tituloFinal}`;
    opcoesDiv.innerHTML = "";
    painelDados.style.display = "none";
    return;
  }
  // ------------------------------------------------------------------------------





  // Testes de dados - Ganho ou perda de vida ---------------------------------------
  if (capitulo.teste) {
    painelDados.style.display = "block";
    const botaoDados = document.getElementById("rolarDados");

    botaoDados.onclick = () => {
      const { soma, resultados } = rolarDados(3, 6);
      document.getElementById("resultado").textContent =
        `Rolagens: ${resultados.join(", ")} | Total: ${soma}`;

      if (soma >= capitulo.teste.dificuldade) {
        alert(`Teste de ${capitulo.teste.tipo} bem-sucedido!`);
        personagem.vida += 2;
      } else {
        alert(`Teste de ${capitulo.teste.tipo} falhou!`);
        personagem.vida -= 2;
      }

      personagem.atualizarFicha();

      //  Verifica se morreu antes de seguir
      if (!verificarGameOver()) {
        carregarCapitulo(capitulo.opcoes[0].vaiPara);
      }
    };
  } else {
    painelDados.style.display = "none";
  }
  // ------------------------------------------------------------------------------



  // Itens
  if (capitulo.item) {
    personagem.aplicarItem(capitulo.item);
  }



  
  // Opções
  capitulo.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao.texto;
    botao.classList.add("botao-jogo");
    botao.addEventListener("click", () => {
      carregarCapitulo(opcao.vaiPara);
      verificarGameOver(); //  Verifica se morreu após escolher opção
    });
    opcoesDiv.appendChild(botao);
  });
}
