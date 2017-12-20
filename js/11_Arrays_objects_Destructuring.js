//em javascript:
var array = [1, 2, 3];
var x = array[0];
//console.log(x);
//em typescript:
var array1 = [1, 2, 3];
var a, b, c;
a = array[0], b = array[1], c = array[2]; //ou let [a,b,c] = [1,2,3];
//console.log(a,b,c);
//------------------------------------------------------------
//em javascript:
var pessoa = {
    "nome": "Rafaela",
    "sobrenome": "Marraschi"
};
var nome = pessoa.nome;
var sobrenome = pessoa.sobrenome;
//console.log(nome, sobrenome);
//em typescript:
var pessoa2 = {
    "nome": "Rafaela",
    "sobrenome": "Marraschi"
};
var nome2, sobrenome2;
(nome2 = pessoa2.nome2, sobrenome2 = pessoa2.sobrenome2);
console.log(nome2, sobrenome2);
