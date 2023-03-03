function funcionarios(){
    //recuperar dados do formulário
    let nro1 = parseFloat(document.getElementById("nro1").value)
    let nro2 = parseFloat(document.getElementById("nro2").value)
    //processamento
    let comissao = parseFloat(nro2 * 0.04)
    let salariofinal = parseFloat(nro1) + (nro2 * 0.04)
    //saida de dados
    document.getElementById("comissao").innerHTML="O valor da comissão é " + parseFloat(comissao)
    document.getElementById("salariofinal").innerHTML=" O valor do seu salário final é " + parseFloat(salariofinal)

}