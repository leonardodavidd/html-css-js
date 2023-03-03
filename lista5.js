function desconto(){
    //recuperar dados do formulário
    let nro1 = document.getElementById("nro1").value;
    //processamento
    let descontinho = nro1 * 0.10
    let valorreal = nro1 - descontinho
    //saida de dados
    document.getElementById("valorreal").innerHTML=" O novo valor com desconto é: " + valorreal
}