function gramas(){
    //recuperar dados do formulário
    let nro1 = parseFloat(document.getElementById("nro1").value)
    //processamento
    let conta = parseFloat(nro1 * 1000)
    //saida de dados
    document.getElementById("conta").innerHTML=" O seu peso em gramas é: " + parseFloat(conta)
}