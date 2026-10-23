function aplicarCupom(subtotal, codigo){
    if (codigo = "DESC10") {
        subtotal = subtotal * 0.9 
    } else if (codigo = "DESC20"){
        subtotal = subtotal * 0.8 
    } else if (codigo = "FRETEGRATIS") {
        subtotal = subtotal - 15
    } else {
        console.log("cupom inválido, valor inalterado");
    }
}