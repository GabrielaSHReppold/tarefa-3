"use strict";
/* crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamaroteIngresso = void 0;
const ingresso_1 = require("./ingresso");
class CamaroteIngresso extends ingresso_1.Ingresso {
    _valorAdicionalPorPessoa;
    constructor(valor, valorAdicionalPorPessoa = 51.90) {
        super(valor);
        this._valorAdicionalPorPessoa = valorAdicionalPorPessoa;
    }
    imprimiValor() {
        const valorTotal = this._valor + this._valorAdicionalPorPessoa;
        console.log(`Valor do ingresso no camarote: R$ ${valorTotal}`);
    }
    gerarListaValores() {
        const maxPessoas = 5;
        for (let i = 1; i <= maxPessoas; i++) {
            const valorTotal = this._valor + (this._valorAdicionalPorPessoa * i);
            console.log(`${i} pessoa(s) no camarote: R$ ${this._valor} do camarote + R$ ${(this._valorAdicionalPorPessoa * i).toFixed(2)} adicionais = Total: R$ ${valorTotal.toFixed(2)}`);
        }
    }
}
exports.CamaroteIngresso = CamaroteIngresso;
