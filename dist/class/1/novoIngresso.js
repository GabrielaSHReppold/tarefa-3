"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.novoIngresso = void 0;
/* a. crie uma classe Normal, que herda Ingresso.. */
const ingresso_1 = require("./ingresso");
class novoIngresso extends ingresso_1.Ingresso {
    constructor(valor) {
        super(valor);
    }
    imprimiValor() {
        console.log(`Valor do ingresso: R$ ${this.valor}`);
    }
}
exports.novoIngresso = novoIngresso;
