

// Criar uma função para o botão calcular. Assim que acionado devera exibir o imc do usuario.

function calculadorImc(){
    // Declarando os objetos
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')
    var imc = document.getElementById('resultado')

    // Conversão explícita
    var altura = Number(altura.value)
    var peso = Number(peso.value)

    // Convertendo altura em cm
    var altura = altura / 100

    // Calculo imc
    var resultado = peso / (altura * altura)
    var resultadoExato = resultado.toFixed(1)

    // Imprimindo o resulatdo do imc
    imc.innerHTML = `Seu IMC atual é de <strong>${resultadoExato}</strong> %`

    
}