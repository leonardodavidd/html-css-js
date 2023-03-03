function area1(){
    //recuperar de dados do formulário
    let nro1 = parseFloat(document.getElementById("nro1").value)
    //processamento
    let formula = parseFloat(nro1 * nro1)
    //saida de dados
    document.getElementById("formula").innerHTML=" A área do quadrado em cm é : " + parseFloat(formula)
}