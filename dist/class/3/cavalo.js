"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavalo = void 0;
const animal_1 = require("./animal");
class Cavalo extends animal_1.Animal {
    velocidade;
    getVelocidade() {
        return this.velocidade;
    }
    constructor(nome, idade, peso, altura, cor, especie, velocidade) {
        super(nome, idade, peso, altura, cor, especie);
        this.velocidade = velocidade;
    }
    galopar() {
        console.log(`${this.nome} está galopando a uma velocidade de ${this.velocidade} km/h.`);
    }
    emitirSom() {
        console.log(`${this.nome} está relinchando: Iiirrrrí!`);
    }
}
exports.Cavalo = Cavalo;
