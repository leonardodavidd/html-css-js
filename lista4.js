function calcularexe4(){
    //recuperar dados do formulario
    let nro1 = document.getElementById("nro1").value;
    let nro2 = document.getElementById("nro2").value;
    //processamento
    let mediaponderada = (nro1 * 2)+(nro2 * 3)/(2+3)
    //saida de dados
    document.getElementById("mediaponderada").innerHTML = " O resultado da média ponderada: " + mediaponderada
}