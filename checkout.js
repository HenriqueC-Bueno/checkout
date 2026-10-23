// ==== CARRINHO ====
function calcularSubtotal(itens) {
  let subtotal = 0;
  for (const item of itens) {
    subtotal += item.preco * item.quantidade;
  }
  return subtotal;
}

function contarItens(itens) {
  let total = 0;
  for (const item of itens) {
    total += item.quantidade;
  }
  return total;
}

// ===== TESTE =====
const carrinho = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Boné", preco: 30, quantidade: 1 },
];

console.log(calcularSubtotal(carrinho)); // 130
console.log(contarItens(carrinho));      // 3
function calcularSubtotal(itens){


// ==== CUPOM ====
}

function contarItens(itens){

}

function aplicarCupom(subtotal, codigo){
    
}

function finalizarCompra(itens, codigoCupons) {
    return { subtotal: 0, desconto: 0, total : 0};
}
// ==== TESTE ====
const itens = [
    { nome: "camiseta", preço: 50 , quantidade : 2 },
    { nome: "tenis", preço: 150 , quantidade : 1 }
];
console.log(finalizarCompra(itens, "DESC10"));