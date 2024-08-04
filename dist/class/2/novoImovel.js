"use strict";
/* a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NovoImovel = void 0;
const imovel_1 = require("./imovel");
class NovoImovel extends imovel_1.Imovel {
    comissao;
    constructor(endereco, preco, comissao) {
        super(endereco, preco);
        this.comissao = comissao;
    }
    get Comissao() {
        return this.comissao;
    }
    valorComComissao() {
        return this.preco + this.comissao;
    }
    imprimirComissao() {
        console.log(`Imóvel novo no valor de R$ ${this.valorComComissao()}`);
    }
}
exports.NovoImovel = NovoImovel;
