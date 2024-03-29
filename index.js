// INPUT - VARIÁVEIS
// Aqui se define a quantidade de Vitórias e Derrotas que o Player teve
let saldo = quantidadeDeVitoriasDerrotas(1005, 50)

// Função que contabiliza a diferença das Vitórias para as Derrotas
function quantidadeDeVitoriasDerrotas(vitoria, derrota){
    vitoriasMenosDerrotas = vitoria - derrota
    return vitoriasMenosDerrotas
}

// É analisado o Nível do player
let nivel
if (saldo <= 10) {
    nivel = "Ferro"
} else if (saldo > 10 && saldo <= 20){
    nivel = "Bronze"
} else if (saldo > 20 && saldo <= 50){
    nivel = "Prata"
} else if (saldo > 50 && saldo <= 80){
    nivel = "Ouro"
} else if (saldo > 80 && saldo <= 90){
    nivel = "Diamante"
} else if (saldo > 90 && saldo <= 100){
    nivel = "Lendário"
} else{
    nivel = "Imortal"
}

// SAÍDA
console.log(`O Herói tem o saldo de ${saldo} e está no nível de ${nivel}!`)