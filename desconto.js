let produto = prompt("digite o produto");
let quantidade = prompt("digite o quantidade");
let valor = prompt("digite o valor");

let valorTotal = produto * quantidade;
let valorTotalComDesconto = valorTotal * 0.1;

window.document.write(`Produto: ${produto}  </br>`);
window.document.write(`Quantidade: ${quantidade}  </br>`);
window.document.write(`Valor unitário: ${valor}  </br>`);
window.document.write(`Total sem desconto: ${valorTotal}  </br>`);
window.document.write(`Total com desconto de 10%: ${valorTotalComDesconto}`);