export function rolarDados(qtd, faces) {
  let soma = 0;
  let resultados = [];
  for (let i = 0; i < qtd; i++) {
    const valor = Math.floor(Math.random() * faces) + 1;
    resultados.push(valor);
    soma += valor;
  }
  return { soma, resultados };
}