
const maquinas = [];

export function cadastrarMaquina(maquina) {
    maquinas.push(maquina);
}

export function listarMaquinas() {
    return maquinas;
}

export function buscarMaquinaPorIndice(indice) {
    return maquinas[indice];
}

export function atualizarMaquina(indice, maquina) {
    maquinas[indice] = maquina;
}

export function excluirMaquina(indice) {
    maquinas.splice(indice, 1);
}
