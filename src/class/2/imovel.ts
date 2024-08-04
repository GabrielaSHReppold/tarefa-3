/* 2. Crie a classe Imovel, que possui um endereço e um preço.*/

export class Imovel {
    protected endereco: string;
    protected preco: number;

    public get Preco(): number {
      return this.preco;
    }

    constructor(endereco: string, preco: number) {
        this.endereco = endereco;
        this.preco = preco;
      }
}