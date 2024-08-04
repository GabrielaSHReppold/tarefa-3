import { novoIngresso } from "./class/1/novoIngresso";
import { VipIngresso } from "./class/1/ingressoVip";
import { CamaroteIngresso } from "./class/1/ingressoCamarote";

console.log("--------------Tarefa 1 Ingressos----------------");

const ingressoNormal = new novoIngresso(21.90);
ingressoNormal.imprimiValor();

const ingressoVip = new VipIngresso(21.90, 30.00);
ingressoVip.imprimiValor();

const ingressoCamarote = new CamaroteIngresso(150.00);
ingressoCamarote.gerarListaValores();

console.log("");
console.log("--------------Tarefa 2 Imovel----------------");
console.log("");

import { NovoImovel } from "./class/2/novoImovel";
import { VelhoImovel } from "./class/2/velhoImovel";

const imovelNovo = new NovoImovel("Rua Heinen, 456", 200000, 50000);
imovelNovo.imprimirComissao();

const imovelVelho = new VelhoImovel("Rua Reppold, 789", 200000, 30000);
imovelVelho.imprimirDesconto();

console.log("");
console.log("--------------Tarefa 3 Animais----------------");
console.log("");

import { Cachorro } from "./class/3/cachorro";
import { Cavalo } from "./class/3/cavalo";
import { Gato } from "./class/3/gato";

const cachorro = new Cachorro("Lola", 3, 10, 0.5, "Marrom", "Cachorro", "Pug");
cachorro.comer();
cachorro.dormir();
cachorro.emitirSom();
cachorro.abanarORabo();
console.log(`Raça do cachorro: ${cachorro.getRaca()}`);

const cavalo = new Cavalo("Alazao", 5, 400, 1.8, "Marrom", "Cavalo", 60);
cavalo.comer();
cavalo.dormir();
cavalo.emitirSom();
cavalo.galopar();
console.log(`Velocidade do cavalo: ${cavalo.getVelocidade()} km/h`);

const gato = new Gato("Garfield", 2, 4, 0.3, "Laranja", "Gato", 20);
gato.comer();
gato.dormir();
gato.emitirSom();
gato.ronronar();
console.log(`Tempo de vida do gato: ${gato.getTempoDeVida()} anos`);


