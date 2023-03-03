function peso(){
    //recuperar dados do formulario
    let nro1 =  parseFloat(document.getElementById("nro1").value)
    //processamento
    let engordar = parseFloat(nro1 * 0.15) + (nro1) 
    let emagrecer = parseFloat(nro1) - (nro1 * 0.20) 
    //saida de dados
    document.getElementById("engordar").innerHTML= "Se você engordou 15% do seu peso então você tem essa quantidade de kilos " + parseFloat(engordar)
    document.getElementById("emagrecer").innerHTML="Se você emagreceu 20% do seu peso então você tem essa quantidade de kilos  " + parseFloat(emagrecer)
}