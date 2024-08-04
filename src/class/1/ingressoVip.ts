import { Ingresso } from "./ingresso";

/* crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional. */

export class VipIngresso extends Ingresso {
    private _valorAdicional: number;

    constructor(valor: number, valorAdicional: number = 30.00) { 
        super(valor);
        this._valorAdicional = valorAdicional;
    }

    public imprimiValor(): void {
        const valorTotal = this._valor + this._valorAdicional;
        console.log(`Valor do ingresso VIP: R$ ${valorTotal}`);
    }
}


