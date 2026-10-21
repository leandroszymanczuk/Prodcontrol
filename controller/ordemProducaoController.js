
import { OrdemProducao } from "../model/OrdemProducao.js";

import {
    cadastrarOrdemProducao as salvarOrdem,
    listarOrdensProducao as obterOrdens,
    buscarOrdemProducaoPorIndice,
    atualizarOrdemProducao as substituirOrdem,
    excluirOrdemProducao as removerOrdem
} from "../repository/ordemProducaoRepository.js";

export function cadastrarOrdemProducao(
    numero, produto, quantidade, prazo
) {
    const ordem = new OrdemProducao(
        numero, produto, quantidade, prazo
    );

    salvarOrdem(ordem);
    console.log("Ordem de produção cadastrada com sucesso!");
}

export function listarOrdensProducao() {
    const ordens = obterOrdens();

    console.log("\n=== LISTA DE ORDENS DE PRODUÇÃO ===");

    if (ordens.length === 0) {
        console.log("Nenhuma ordem cadastrada.");
    }

    for (let i = 0; i < ordens.length; i++) {
        console.log("Índice:", i);
        console.log("Número:", ordens[i].numero);
        console.log("Produto:", ordens[i].produto);
        console.log("Quantidade:", ordens[i].quantidade);
        console.log("Prazo:", ordens[i].prazo);
        console.log("Status:", ordens[i].status);
        console.log("--------------------");
    }
}

export function buscarOrdemProducao(indice) {
    const ordem = buscarOrdemProducaoPorIndice(indice);

    if (ordem === undefined) {
        console.log("Ordem não encontrada no índice", indice);
        return;
    }

    console.log("Ordem encontrada:", ordem);
    console.log("Status:", ordem.status);
}

export function atualizarOrdemProducao(
    indice, numero, produto, quantidade, prazo
) {
    if (buscarOrdemProducaoPorIndice(indice) === undefined) {
        console.log("Não existe ordem nesse índice.");
        return;
    }

    const ordem = new OrdemProducao(
        numero, produto, quantidade, prazo
    );

    substituirOrdem(indice, ordem);
    console.log("Ordem de produção atualizada com sucesso!");
}

export function excluirOrdemProducao(indice) {
    if (buscarOrdemProducaoPorIndice(indice) === undefined) {
        console.log("Não existe ordem nesse índice.");
        return;
    }

    removerOrdem(indice);
    console.log("Ordem de produção excluída com sucesso!");
}

export function iniciarOrdemProducao(indice) {
    const ordem = buscarOrdemProducaoPorIndice(indice);

    if (ordem === undefined) {
        console.log("Ordem não encontrada.");
        return;
    }

    ordem.iniciar();
    console.log("Ordem iniciada!");
}

export function concluirOrdemProducao(indice) {
    const ordem = buscarOrdemProducaoPorIndice(indice);

    if (ordem === undefined) {
        console.log("Ordem não encontrada.");
        return;
    }

    ordem.concluir();
    console.log("Ordem concluída!");
}
