
import { Operador } from "../model/Operador.js";

import {
    cadastrarOperador as salvarOperador,
    listarOperadores as obterOperadores,
    buscarOperadorPorIndice,
    atualizarOperador as substituirOperador,
    excluirOperador as removerOperador
} from "../repository/operadorRepository.js";

export function cadastrarOperador(matricula, nome, funcao, turno) {
    const operador = new Operador(matricula, nome, funcao, turno);
    salvarOperador(operador);
    console.log("Operador cadastrado com sucesso!");
}

export function listarOperadores() {
    const operadores = obterOperadores();

    console.log("\n=== LISTA DE OPERADORES ===");

    if (operadores.length === 0) {
        console.log("Nenhum operador cadastrado.");
    }

    for (let i = 0; i < operadores.length; i++) {
        console.log("Índice:", i);
        console.log("Matrícula:", operadores[i].matricula);
        console.log("Nome:", operadores[i].nome);
        console.log("Função:", operadores[i].funcao);
        console.log("Turno:", operadores[i].turno);
        console.log("Status:", operadores[i].status);
        console.log("--------------------");
    }
}

export function buscarOperador(indice) {
    const operador = buscarOperadorPorIndice(indice);

    if (operador === undefined) {
        console.log("Operador não encontrado no índice", indice);
        return;
    }

    console.log("Operador encontrado:", operador);
    console.log("Status:", operador.status);
}

export function atualizarOperador(
    indice, matricula, nome, funcao, turno
) {
    if (buscarOperadorPorIndice(indice) === undefined) {
        console.log("Não existe operador nesse índice.");
        return;
    }

    const operador = new Operador(matricula, nome, funcao, turno);
    substituirOperador(indice, operador);
    console.log("Operador atualizado com sucesso!");
}

export function excluirOperador(indice) {
    if (buscarOperadorPorIndice(indice) === undefined) {
        console.log("Não existe operador nesse índice.");
        return;
    }

    removerOperador(indice);
    console.log("Operador excluído com sucesso!");
}

export function ativarOperador(indice) {
    const operador = buscarOperadorPorIndice(indice);

    if (operador === undefined) {
        console.log("Operador não encontrado.");
        return;
    }

    operador.ativar();
    console.log("Operador ativado!");
}

export function desativarOperador(indice) {
    const operador = buscarOperadorPorIndice(indice);

    if (operador === undefined) {
        console.log("Operador não encontrado.");
        return;
    }

    operador.desativar();
    console.log("Operador desativado!");
}
