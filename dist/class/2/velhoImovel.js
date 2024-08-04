"use strict";
/* b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VelhoImovel = void 0;
const imovel_1 = require("./imovel");
class VelhoImovel extends imovel_1.Imovel {
    desconto;
    constructor(endereco, preco, desconto) {
        super(endereco, preco);
        this.desconto = desconto;
    }
    getDesconto() {
        return this.desconto;
    }
    valorComDesconto() {
        return this.preco - this.desconto;
    }
    imprimirDesconto() {
        console.log(`Imóvel velho no valor de R$ ${this.valorComDesconto()}`);
    }
}
exports.VelhoImovel = VelhoImovel;
