function calcularIMC(){
    var formulario = document.getElementById("formulario");
    var classeInput = document.getElementById("imc-classe").querySelector("input");

    var kilos = + formulario.kilos.value;
    var metros = + formulario.metros.value;
    var cm = + formulario.cm.value;

    var altura =  (metros * 100 + cm) / 100;
    var imc = kilos / (altura * altura);

    formulario.imc.value = imc.toFixed(2);

    if (imc < 20) {
        classeInput.value = "Abaixo do peso recomendado";
    } else if (imc >= 20 && imc < 25) {
        classeInput.value = "Peso ideal esperado";
    } else if (imc >= 25 && imc <= 30) {
        classeInput.value = "Sobrepeso";
    } else if (imc >= 30 && imc <= 35) {
        classeInput.value = "Obeso moderado";
    } else if (imc > 35 && imc <= 40) {
        classeInput.value = "Muito obeso";
    } else if (imc > 40 && imc <= 50) {
        classeInput.value = "Obeso mórbido";
    } else if (imc >= 50) {
        classeInput.value = "Obeso supremo";
    }
    
}
