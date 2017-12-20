//em javascript:

var array = [1,2,3];

var x = array[0];

//console.log(x);

//em typescript:

let array1 = [1,2,3];

let a,b,c;

[a,b,c] = array; //ou let [a,b,c] = [1,2,3];

//console.log(a,b,c);

//------------------------------------------------------------

//em javascript:
var pessoa = {

    "nome" : "Rafaela",
    "sobrenome": "Marraschi"
}

var nome = pessoa.nome;
var sobrenome = pessoa.sobrenome;

//console.log(nome, sobrenome);

//em typescript:

let pessoa2 = {

    "nome" : "Rafaela",
    "sobrenome": "Marraschi"
}

let nome2, sobrenome2;

({nome2,sobrenome2} = pessoa2);

console.log(nome2, sobrenome2);