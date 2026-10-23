function calcularSubtotal(itens){

}

function contarItens(itens){

}

function aplicarCupom(subtotal, codigo){
    if (codigo === "DESC10") {
        subtotal = subtotal * 0.9;
        return subtotal;
    } else if (codigo = "DESC20"){
        subtotal = subtotal * 0.8;
        return subtotal;
    } else if (codigo === "FRETEGRATIS") {
        subtotal = subtotal - 15;
        return subtotal;
    } else {
        console.log("cupom inválido, valor inalterado");
        return;
    }
}

function finalizarCompra(itens, codigoCupons) {
    return { subtotal: 0, desconto: 0, total : 0};
}

const itens = [
    { nome: "camiseta", preço: 50 , quantidade : 2 },
    { nome: "tenis", preço: 150 , quantidade : 1 }
];
console.log(finalizarCompra(itens, "DESC10"));