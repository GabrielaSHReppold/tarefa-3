"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const animal_1 = require("./animal");
class Gato extends animal_1.Animal {
    _tempoDeVida;
    getTempoDeVida() {
        return this._tempoDeVida;
    }
    constructor(nome, idade, peso, altura, cor, especie, tempoDeVida) {
        super(nome, idade, peso, altura, cor, especie);
        this._tempoDeVida = tempoDeVida;
    }
    ronronar() {
        console.log(`${this.nome} está ronronando.`);
    }
    emitirSom() {
        console.log(`${this.nome} está miando: Miau!`);
    }
}
exports.Gato = Gato;
