import { ListaDuplamenteEncadeada } from "./ListaDuplamenteEncadeada";

function executarTestes() {
    const lista = new ListaDuplamenteEncadeada();

    console.log("======= INÍCIO DOS TESTES =======");

    // Teste 1 - Verificar se começa vazia
    console.log("\nTeste: Lista começa vazia?");
    console.log(lista.verificarSeEstaVazia()); // esperado: true

    // Teste 2 - Inserir no início
    console.log("\nInserindo valores no início: 10, 20, 30");
    lista.inserirNoInicio(10);
    lista.inserirNoInicio(20);
    lista.inserirNoInicio(30);

    console.log("Exibindo do início ao fim:");
    lista.exibirDoInicioAoFim();

    // Teste 3 - Inserir no final
    console.log("\nInserindo valores no final: 40 e 50");
    lista.inserirNoFinal(40);
    lista.inserirNoFinal(50);

    console.log("Exibindo do início ao fim:");
    lista.exibirDoInicioAoFim();

    // Teste 4 - Inserir em posição específica
    console.log("\nInserindo valor 25 na posição 3");
    lista.inserirEmPosicao(25, 3);
    lista.exibirDoInicioAoFim();

    // Teste 5 - Quantidade de elementos
    console.log("\nQuantidade de elementos na lista:");
    console.log(lista.quantidadeDeElementos());

    // Teste 6 - Verificar existência de valores
    console.log("\nVerificando se existe o valor 40:");
    console.log(lista.verificarSeExiste(40)); // esperado: true

    console.log("Verificando se existe o valor 99:");
    console.log(lista.verificarSeExiste(99)); // esperado: false

    // Teste 7 - Remover do início
    console.log("\nRemovendo do início:");
    console.log("Valor removido:", lista.removerNoInicio());
    lista.exibirDoInicioAoFim();

    // Teste 8 - Remover do final
    console.log("\nRemovendo do final:");
    console.log("Valor removido:", lista.removerNoFinal());
    lista.exibirDoInicioAoFim();

    // Teste 9 - Remover em posição
    console.log("\nRemovendo elemento da posição 2:");
    console.log("Valor removido:", lista.removerEmPosicao(2));
    lista.exibirDoInicioAoFim();

    // Teste 10 - Exibir do fim ao início
    console.log("\nExibindo lista do fim ao início:");
    lista.exibirDoFimAoInicio();

    // Teste 11 - Verificar se está vazia após remoções
    console.log("\nLista está vazia?");
    console.log(lista.verificarSeEstaVazia());

    console.log("\n======= FIM DOS TESTES =======");
}

executarTestes();




