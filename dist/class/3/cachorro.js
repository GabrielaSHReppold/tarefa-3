"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const animal_1 = require("./animal");
class Cachorro extends animal_1.Animal {
    _raca;
    getRaca() {
        return this._raca;
    }
    constructor(nome, idade, peso, altura, cor, especie, raca) {
        super(nome, idade, peso, altura, cor, especie);
        this._raca = raca;
    }
    abanarORabo() {
        console.log(`${this.nome} está abanando o rabo.`);
    }
    emitirSom() {
        console.log(`${this.nome} está latindo: Au Au!`);
    }
}
exports.Cachorro = Cachorro;
