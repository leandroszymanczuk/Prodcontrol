
export class Maquina {
    #status;

    constructor(codigo, nome, setor) {
        this.codigo = codigo;
        this.nome = nome;
        this.setor = setor;
        this.#status = "desligada";
    }

    get status() {
        return this.#status;
    }

    ligar() {
        this.#status = "ligada";
    }

    desligar() {
        this.#status = "desligada";
    }
}
