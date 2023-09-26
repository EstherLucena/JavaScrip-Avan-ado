window.alert('Hello, world!');
window.confirm('Você esta ai?');
var nome = prompt('Qual seu nome?');

var n1 = prompt(`${nome}, digite um numero`);
// var n2 = prompt(`${nome}, digite outro numero`);
var n1Convertida = Number(n1); // Number.parseInt(n1); numero inteiro
// var n2Convertida = Number(n2); // Number.parseFloat(n2); numero com decimal
// window.document.write(n1Convertida + n2Convertida);

// var soma= n1Convertida + n2Convertida;
// document.write(soma.toFixed(2));
var bik = n1Convertida.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(bik);

var teste = nome.replace('her','rela');
document.write(teste);

// console.log(typeof n1); //sem a conversao  //typeof para ver o tipo do registro: string, number, bolean
// console.log(typeof n1Convertida); // com a conversao

// document.write(`<p> O seu nome é: <strong> ${nome} </strong></p>.`);

// document.write(`<p>Seu nome tem <strong> ${nome.length}</strong> letras!<p>`);

// document.write(`O seu nome maiusculo é ${nome.toLocaleUpperCase()}.`);

// document.write(`O seu nome minusculo é ${nome.toLocaleLowerCase()}.`);