
import { Maquina } from "../model/Maquina.js";

import {
    cadastrarMaquina as salvarMaquina,
    listarMaquinas as obterMaquinas,
    buscarMaquinaPorIndice,
    atualizarMaquina as substituirMaquina,
    excluirMaquina as removerMaquina
} from "../repository/maquinaRepository.js";

export function cadastrarMaquina(codigo, nome, setor) {
    const maquina = new Maquina(codigo, nome, setor);
    salvarMaquina(maquina);
    console.log("Máquina cadastrada com sucesso!");
}

export function listarMaquinas() {
    const maquinas = obterMaquinas();

    console.log("\n=== LISTA DE MÁQUINAS ===");

    if (maquinas.length === 0) {
        console.log("Nenhuma máquina cadastrada.");
    }

    for (let i = 0; i < maquinas.length; i++) {
        console.log("Índice:", i);
        console.log("Código:", maquinas[i].codigo);
        console.log("Nome:", maquinas[i].nome);
        console.log("Setor:", maquinas[i].setor);
        console.log("Status:", maquinas[i].status);
        console.log("--------------------");
    }
}

export function buscarMaquina(indice) {
    const maquina = buscarMaquinaPorIndice(indice);

    if (maquina === undefined) {
        console.log("Máquina não encontrada no índice", indice);
        return;
    }

    console.log("Máquina encontrada:", maquina);
    console.log("Status:", maquina.status);
}

export function atualizarMaquina(indice, codigo, nome, setor) {
    if (buscarMaquinaPorIndice(indice) === undefined) {
        console.log("Não existe máquina nesse índice.");
        return;
    }

    const maquina = new Maquina(codigo, nome, setor);
    substituirMaquina(indice, maquina);
    console.log("Máquina atualizada com sucesso!");
}

export function excluirMaquina(indice) {
    if (buscarMaquinaPorIndice(indice) === undefined) {
        console.log("Não existe máquina nesse índice.");
        return;
    }

    removerMaquina(indice);
    console.log("Máquina excluída com sucesso!");
}

export function ligarMaquina(indice) {
    const maquina = buscarMaquinaPorIndice(indice);

    if (maquina === undefined) {
        console.log("Máquina não encontrada.");
        return;
    }

    maquina.ligar();
    console.log("Máquina ligada!");
}

export function desligarMaquina(indice) {
    const maquina = buscarMaquinaPorIndice(indice);

    if (maquina === undefined) {
        console.log("Máquina não encontrada.");
        return;
    }

    maquina.desligar();
    console.log("Máquina desligada!");
}
