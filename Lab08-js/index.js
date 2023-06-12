// Escreva uma função JavaScript para verificar se uma `entrada` é um
// array ou não.

function verificarArray(entrada) {
  if (Array.isArray(entrada)) {
    return true;
  } else {
    return false;
  }
}

// Escreva uma função JavaScript para clonar um array.

function clonarArray(array) {
  return array.slice();
}

// Escreva uma função JavaScript para obter o primeiro elemento de um
// array. Passar um parâmetro 'n' retornará os primeiros 'n' elementos do
// array.

function obterPrimeirosElementos(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

// Escreva uma função JavaScript para obter o último elemento de um
// array. Passar um parâmetro 'n' retornará os últimos 'n' elementos do
// array.

function obterUltimosElementos(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

// Escreva um programa JavaScript simples para unir todos os elementos
// de um array em uma string.

var arrayOriginal = ['Olá', 'mundo', '!'];

var stringUnida = arrayOriginal.join(' ');

console.log("5* "+stringUnida);

// Escreva um programa JavaScript que aceite um número como entrada
// e insira traços (-) entre cada dois números pares. Por exemplo, se você
// aceitar 025468, a saída deve ser 0-254-6-

function inserirTracosEntrePares(numero) {
  var stringNumero = numero.toString();
  var resultado = '';

  for (var i = 0; i < stringNumero.length; i++) {
    resultado += stringNumero[i];

    if (parseInt(stringNumero[i]) % 2 === 0 && parseInt(stringNumero[i + 1]) % 2 === 0) {
      resultado += '-';
    }
  }

  return resultado;
}

var numero = 25468;
var resultadoFinal = inserirTracosEntrePares(numero);

console.log("6* "+resultadoFinal);

// Escreva um programa JavaScript para localizar o item mais frequente
// de um array.

function encontrarItemMaisFrequente(array) {
  var contador = {};
  var itemMaisFrequente;
  var frequenciaMaisAlta = 0;

  for (var i = 0; i < array.length; i++) {
    var elemento = array[i];
    contador[elemento] = (contador[elemento] || 0) + 1;

    if (contador[elemento] > frequenciaMaisAlta) {
      frequenciaMaisAlta = contador[elemento];
      itemMaisFrequente = elemento;
    }
  }

  return itemMaisFrequente;
}

var array = [1, 2, 3, 2, 1, 2, 3, 2, 4, 5, 2, 4, 2];
var itemMaisFrequente = encontrarItemMaisFrequente(array);

console.log("7* " + itemMaisFrequente);

// Escreva um programa JavaScript para remover itens duplicados de um
// array (ignore a diferenciação entre maiúsculas e minúsculas).

function removerDuplicados(array) {
  var arraySemDuplicados = array.filter(function(item, index) {
    return array.indexOf(item.toLowerCase()) === index;
  });

  return arraySemDuplicados;
}

// Existem dois arrays com valores individuais, escreva um programa
// JavaScript para calcular a soma de cada valor de índice individual dos
// arrays fornecidos.

function calcularSomaArrays(array1, array2) {
  var resultado = [];

  for (var i = 0; i < array1.length; i++) {
    var soma = array1[i] + array2[i];
    resultado.push(soma);
  }

  return resultado;
}

// Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente,
// o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você
// deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao
// vetor pilha e mostrá-los no console.

var vetorPilha = [1, 2, 3, 4, 5];
var vetorAdiciona = [6, 7, 8, 9, 10];

vetorPilha.push(...vetorAdiciona);

console.log("10* " + vetorPilha);
