function calcular(){

const salario = Number(document.getElementById("salario").value)

let aumento
let porcentagem
let novo

 if (salario <= 1000) {aumento = salario * 0.2
porcentagem = "20%"} 

 else if (salario > 1000 && salario < 3001) {aumento = salario * 0.15
porcentagem = "15%"}
 
 else if (salario > 3000 && salario < 8001) {aumento = salario * 0.10
porcentagem = "10%"}

 else if (salario > 8000) {aumento = salario * 0.05
porcentagem = "5%"}

 else {alert("Salário inválido!")
return}

novo = salario + aumento

document.getElementById("resultado").innerHTML = 
("Novo salário: " + novo) + "<br>" +
("Aumento: " + aumento) + "<br>" +
("Porcentagem: " + porcentagem)
}