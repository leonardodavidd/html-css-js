function calcularexe3(){
    //recuperar dados do formulário
    let nro1 = document.getElementById("nro1").value;
    let nro2 = document.getElementById("nro2").value;
    //processamento
    let divisao = nro1 / nro2
    //saida de dados
    document.getElementById("divisao").innerHTML = "O resultado é " + divisao
}