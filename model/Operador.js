
export class Operador {
    #status;

    constructor(matricula, nome, funcao, turno) {
        this.matricula = matricula;
        this.nome = nome;
        this.funcao = funcao;
        this.turno = turno;
        this.#status = "ativo";
    }

    get status() {
        return this.#status;
    }

    ativar() {
        this.#status = "ativo";
    }

    desativar() {
        this.#status = "inativo";
    }
}
