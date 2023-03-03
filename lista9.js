function area(){
    //recuperar dados do formulário
    let nro1 = parseFloat(document.getElementById("nro1").value)
    let nro2 = parseFloat(document.getElementById("nro2").value)
    let nro3 = parseFloat(document.getElementById("nro3").value)
    //processamento
    let formula = parseFloat((nro1 + nro2) * nro3) / 2
    //saida de dados
    document.getElementById("formula").innerHTML=" A área do trapézio é : " + parseFloat(formula)
}