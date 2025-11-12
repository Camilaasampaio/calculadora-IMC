//calculadora função
function calculadoraIMC() {
    //Entrada de dados
    let quilogramas = document.getElementById("quilograma").value;
    let metros = document.getElementById("metros").value;

    if (!quilogramas || !metros) {
        document.getElementById("valorIMC").textContent = "Preencha todos os campos!";
        return;
    }

    //Calculo
    let resultado = quilogramas / (metros * metros);
    // arredondar para 2 casas decimais 
    resultado = resultado.toFixed(2);

    //Exibindo o valor
    document.getElementById("valorIMC").textContent = "Seu IMC é: " + resultado;

    // Classificação
    let classificacao = "";
    if (resultado < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (resultado < 24.9) {
        classificacao = "Peso normal";
    } else if (resultado < 29.9) {
        classificacao = "Sobrepeso";
    } else if (resultado < 34.9) {
        classificacao = "Obesidade grau I";
    } else if (resultado < 39.9) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III (grave)";
    }
    // Mostrar resultado final
    document.getElementById("resultado").textContent = "Resultado: " + classificacao;
}
