/* a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional. */

import { Imovel } from "./imovel"

export class NovoImovel extends Imovel {
    private comissao: number;
  
    constructor(endereco: string, preco: number, comissao: number) {
      super(endereco, preco);
      this.comissao = comissao;
    }
  
    public get Comissao(): number {
      return this.comissao;
    }
  
    public valorComComissao(): number {
      return this.preco + this.comissao;
    }
  
    public imprimirComissao(): void {
      console.log(`Imóvel novo no valor de R$ ${this.valorComComissao()}`);
    }
}