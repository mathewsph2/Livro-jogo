import { carregarCapitulo } from "./jogo.js";
import { rolarDados } from "./dados.js";



// Carregar o primeiro capítulo
carregarCapitulo("1");



// Rolagem livre (fora da história)
document.getElementById("rolarDados").addEventListener("click", () => {
  const { soma, resultados } = rolarDados(2, 6);
  document.getElementById("resultado").textContent =
    `Rolagens: ${resultados.join(", ")} | Total: ${soma}`;
});
