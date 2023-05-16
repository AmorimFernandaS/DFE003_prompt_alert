//1 - Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.//
let numero = prompt("Digite um número:");
let dobro = numero * 2;
alert("O dobro do número informado é: " + dobro);

//Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.//
let valorConta = prompt("Digite o valor da conta:");
let taxaGarcom = prompt("Digite a taxa de atendimento do garçom (%):");

valorConta = parseFloat(valorConta);
taxaGarcom = parseFloat(taxaGarcom);

let valorTotal = valorConta + (valorConta * (taxaGarcom / 100));
alert("O valor total do jantar, incluindo a taxa de atendimento do garçom, é: " + valorTotal);

//Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.
let valor = prompt("Digite o valor total da conta:");
let quantidadeClientes = prompt("Digite a quantidade de clientes:");

valor = parseFloat(valor);
quantidadeClientes = parseInt(quantidadeClientes);

let valorPorCliente = valor / quantidadeClientes;
alert("O valor a ser pago por cliente é: " + valorPorCliente);

