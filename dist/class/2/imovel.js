"use strict";
/* 2. Crie a classe Imovel, que possui um endereço e um preço.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imovel = void 0;
class Imovel {
    endereco;
    preco;
    get Preco() {
        return this.preco;
    }
    constructor(endereco, preco) {
        this.endereco = endereco;
        this.preco = preco;
    }
}
exports.Imovel = Imovel;
