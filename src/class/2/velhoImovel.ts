/* b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto. */

import { Imovel } from "./imovel";

export class VelhoImovel extends Imovel {
    private desconto: number;
  
    constructor(endereco: string, preco: number, desconto: number) {
      super(endereco, preco);
      this.desconto = desconto;
    }
  
    public getDesconto(): number {
      return this.desconto;
    }
  
    public valorComDesconto(): number {
      return this.preco - this.desconto;
    }
  
    public imprimirDesconto(): void {
      console.log(`Imóvel velho no valor de R$ ${this.valorComDesconto()}`);
    }
  }