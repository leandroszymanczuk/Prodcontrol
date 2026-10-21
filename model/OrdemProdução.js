
export class OrdemProducao {
    #status;

    constructor(numero, produto, quantidade, prazo) {
        this.numero = numero;
        this.produto = produto;
        this.quantidade = quantidade;
        this.prazo = prazo;
        this.#status = "pendente";
    }

    get status() {
        return this.#status;
    }

    iniciar() {
        this.#status = "em producao";
    }

    concluir() {
        this.#status = "concluida";
    }
}
