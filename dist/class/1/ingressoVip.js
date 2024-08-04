"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VipIngresso = void 0;
const ingresso_1 = require("./ingresso");
/* crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional. */
class VipIngresso extends ingresso_1.Ingresso {
    _valorAdicional;
    constructor(valor, valorAdicional = 30.00) {
        super(valor);
        this._valorAdicional = valorAdicional;
    }
    imprimiValor() {
        const valorTotal = this._valor + this._valorAdicional;
        console.log(`Valor do ingresso VIP: R$ ${valorTotal}`);
    }
}
exports.VipIngresso = VipIngresso;
