/* a. crie uma classe Normal, que herda Ingresso.. */
import { Ingresso } from "./ingresso";

export class novoIngresso extends Ingresso {
    constructor(valor: number) {
        super(valor);
    }

    public imprimiValor(): void {
        console.log(`Valor do ingresso: R$ ${this.valor}`);
    }
}