export interface IListaDuplamenteEncadeada{
    inserirNoInicio(val: number): void;
    inserirNoFinal(valor:number): void;
    inserirEmPosicao(valor:number, posicao:number):void;
    removerNoInicio(): number | null;//retorna o valor do primeiro elemento da lista
    removerNoFinal(): number | null;//retorna o valor do último elemento da lista
    removerEmPosicao(posicao:number): number | null;//retorna o valor do elemento removido
    verificarSeExiste(valor:number): boolean;
    verificarSeEstaVazia():boolean;
    quantidadeDeElementos():number;
    exibirDoInicioAoFim(): void;
    exibirDoFimAoInicio(): void;
}