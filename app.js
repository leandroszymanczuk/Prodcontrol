
import {
    cadastrarMaquina,
    listarMaquinas,
    buscarMaquina,
    ligarMaquina,
    atualizarMaquina,
    excluirMaquina
} from "./controller/maquinaController.js";

import {
    cadastrarOperador,
    listarOperadores,
    buscarOperador,
    desativarOperador,
    atualizarOperador,
    excluirOperador
} from "./controller/operadorController.js";

import {
    cadastrarOrdemProducao,
    listarOrdensProducao,
    buscarOrdemProducao,
    iniciarOrdemProducao,
    concluirOrdemProducao,
    atualizarOrdemProducao,
    excluirOrdemProducao
} from "./controller/ordemProducaoController.js";

cadastrarMaquina(1, "Torno CNC", "Usinagem");
cadastrarMaquina(2, "Prensa Hidráulica", "Montagem");

cadastrarOperador(101, "Carlos Silva", "Torneiro", "Manhã");
cadastrarOperador(102, "Ana Souza", "Supervisora", "Tarde");

cadastrarOrdemProducao(
    1001, "Eixo metálico", 500, "30/10/2026"
);

cadastrarOrdemProducao(
    1002, "Engrenagem", 300, "05/11/2026"
);

listarMaquinas();
listarOperadores();
listarOrdensProducao();

console.log("\n=== BUSCAS ===");
buscarMaquina(0);
buscarOperador(0);
buscarOrdemProducao(0);

console.log("\n=== AÇÕES ESPECÍFICAS ===");

ligarMaquina(0);
desativarOperador(0);
iniciarOrdemProducao(0);
concluirOrdemProducao(1);

console.log("\n=== ATUALIZAÇÕES ===");

atualizarMaquina(
    1, 2, "Prensa Automática", "Produção"
);

atualizarOperador(
    1, 102, "Ana Souza", "Gerente de Produção", "Tarde"
);

atualizarOrdemProducao(
    1, 1002, "Engrenagem industrial", 350, "10/11/2026"
);

console.log("\n=== EXCLUSÕES ===");

excluirMaquina(1);
excluirOperador(1);
excluirOrdemProducao(1);

listarMaquinas();
listarOperadores();
listarOrdensProducao();
