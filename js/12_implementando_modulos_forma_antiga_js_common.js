var soma = function(a,b){
    return a+b;
}

var subtracao = function(a,b){
    return a-b;
}

var operacoes = {
    soma: function(x,y){
        return soma(x,j);
    },
    sub: function(x,y){
        return subtracao(x,y);
    }
}

exports.calculadora = operacoes;

var calculadora = require( './calculadora');