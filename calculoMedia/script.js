alert("Olá Aluno/a!");
const name = prompt("Digite o seu nome:");
const p1 = parseInt(prompt("Digite a nota da sua p1:"));
const p2 = parseInt(prompt("Digite a nota da sua p2"));
const p3 = parseInt(prompt("Digite a nota da sua p3"));
const media= ((p1 + p2 + p3) / 3).toFixed(1);

if (media >=6){
    alert(`Parabéns, ${name}! Você foi aprovado/a com média ${media}!`)
} else {
    alert(`${name}, você foi reprovado/a com média ${media}`)
}