"use strict";
exports.__esModule = true;
var nomeDaClasse = /** @class */ (function () {
    function nomeDaClasse(parametros) {
        this.atributo2 = parametros;
    }
    nomeDaClasse.prototype.imprimir = function (message) {
        console.log(message);
    };
    nomeDaClasse.prototype.soma = function (a, b) {
        return a + b;
    };
    nomeDaClasse.prototype.sub = function (a, b) {
        return a - b;
    };
    return nomeDaClasse;
}());
var novo = new nomeDaClasse("Rafaela");
novo.imprimir(novo.soma(1, 2));
exports["default"] = nomeDaClasse;
