function calcularExe2(){
    //recupera dados do formulário
    let nro1 = document.getElementById("nro1").value;
    let nro2 = document.getElementById("nro2").value;
    let nro3 = document.getElementById("nro3").value;
    //processamento
    let multiplicacao = nro1 * nro2 * nro3;
    //saida de dados
    document.getElementById("multiplicacao").innerHTML= " O resultado é " + multiplicacao;
}