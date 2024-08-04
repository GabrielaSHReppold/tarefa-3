/* 1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
 */

export abstract class Ingresso {
    protected _valor: number;

    public get valor(): number {
        return this._valor;
    }
    
    constructor(valor: number) {
        this._valor = valor;
    }

    public abstract imprimiValor(): void;
}