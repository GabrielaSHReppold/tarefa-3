/* crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional. */

import { Ingresso } from "./ingresso";

export class CamaroteIngresso extends Ingresso {
    private _valorAdicionalPorPessoa: number;

    constructor(valor: number, valorAdicionalPorPessoa: number = 51.90) {
        super(valor);
        this._valorAdicionalPorPessoa = valorAdicionalPorPessoa;
    }

    public imprimiValor(): void {
        const valorTotal = this._valor + this._valorAdicionalPorPessoa;
        console.log(`Valor do ingresso no camarote: R$ ${valorTotal}`);
    }

    public gerarListaValores(): void {
        const maxPessoas = 5;
        for (let i = 1; i <= maxPessoas; i++) {
            const valorTotal = this._valor + (this._valorAdicionalPorPessoa * i);
            console.log(`${i} pessoa(s) no camarote: R$ ${this._valor} do camarote + R$ ${(this._valorAdicionalPorPessoa * i).toFixed(2)} adicionais = Total: R$ ${valorTotal.toFixed(2)}`);
        }
    }
}