"use strict";
/* 1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingresso = void 0;
class Ingresso {
    _valor;
    get valor() {
        return this._valor;
    }
    constructor(valor) {
        this._valor = valor;
    }
}
exports.Ingresso = Ingresso;
