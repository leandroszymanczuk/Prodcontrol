
const ordensProducao = [];

export function cadastrarOrdemProducao(ordem) {
    ordensProducao.push(ordem);
}

export function listarOrdensProducao() {
    return ordensProducao;
}

export function buscarOrdemProducaoPorIndice(indice) {
    return ordensProducao[indice];
}

export function atualizarOrdemProducao(indice, ordem) {
    ordensProducao[indice] = ordem;
}

export function excluirOrdemProducao(indice) {
    ordensProducao.splice(indice, 1);
}
