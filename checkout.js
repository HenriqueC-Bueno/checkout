function calcularSubtotal(itens){

}

function contarItens(itens){

}

function aplicarCupom(subtotal, codigo){
    
}

function finalizarCompra(itens, codigoCupons) {
    return { subtotal: 0, desconto: 0, total : 0};
}

const itens = [
    { nome: "camiseta", preço: 50 , quantidade : 2 },
    { nome: "tenis", preço: 150 , quantidade : 1 }
];
console.log(finalizarCompra(itens, "DESC10"));