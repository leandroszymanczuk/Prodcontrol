
const operadores = [];

export function cadastrarOperador(operador) {
    operadores.push(operador);
}

export function listarOperadores() {
    return operadores;
}

export function buscarOperadorPorIndice(indice) {
    return operadores[indice];
}

export function atualizarOperador(indice, operador) {
    operadores[indice] = operador;
}

export function excluirOperador(indice) {
    operadores.splice(indice, 1);
}
