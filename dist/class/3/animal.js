"use strict";
/* Dado o seguinte diagrama:

Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    nome;
    idade;
    peso;
    altura;
    cor;
    especie;
    constructor(nome, idade, peso, altura, cor, especie) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.cor = cor;
        this.especie = especie;
    }
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
    dormir() {
        console.log(`${this.nome} está dormindo.`);
    }
    emitirSom() {
        console.log(`${this.nome} está emitindo um som.`);
    }
}
exports.Animal = Animal;
