import { Elemento } from "./elemento"
import { IListaDuplamenteEncadeada } from "./interface/IlistaDuplamenteEncadeada"

export class ListaDuplamenteEncadeada implements IListaDuplamenteEncadeada {

    public inicio: Elemento | null

    constructor() {
        this.inicio = null
    }

    inserirNoInicio(valor: number): void {
        let novoElemento: Elemento = new Elemento(valor)

        if (this.inicio == null) {
            this.inicio = novoElemento
        } else {
            novoElemento.proximo = this.inicio
            this.inicio.anterior = novoElemento
            this.inicio = novoElemento
        }
    }

    inserirNoFinal(valor: number): void {
        let novoElemento: Elemento = new Elemento(valor)

        if (this.inicio == null) {
            this.inicio = novoElemento
        } else {
            let aux: Elemento | null = this.inicio

            while (aux.proximo != null) {
                aux = aux.proximo
            }

            aux.proximo = novoElemento
            novoElemento.anterior = aux
        }
    }

    inserirEmPosicao(valor: number, posicao: number): void {

        if (posicao <= 1) {
            this.inserirNoInicio(valor)
            return
        }

        if (posicao > this.quantidadeDeElementos()) {
            this.inserirNoFinal(valor)
            return
        }

        let novoElemento = new Elemento(valor)
        let aux = this.inicio
        let indice = 1

        while (aux != null && indice < posicao - 1) {
            aux = aux.proximo
            indice++
        }

        novoElemento.proximo = aux!.proximo
        novoElemento.anterior = aux

        if (aux!.proximo != null) {
            aux!.proximo.anterior = novoElemento
        }

        aux!.proximo = novoElemento
    }

    removerNoInicio(): number | null {

        if (this.inicio == null) {
            console.error("Lista Vazia!!")
            return null
        }

        let valorRemovido = this.inicio.valor

        this.inicio = this.inicio.proximo

        if (this.inicio != null) {
            this.inicio.anterior = null
        }

        return valorRemovido
    }

    removerNoFinal(): number | null {

        if (this.inicio == null) {
            console.log("Lista Vazia!")
            return null
        }

        if (this.inicio.proximo == null) {
            let valorRemovido = this.inicio.valor
            this.inicio = null
            return valorRemovido
        }

        let aux = this.inicio

        while (aux.proximo != null) {
            aux = aux.proximo
        }

        let valorRemovido = aux.valor

        aux.anterior!.proximo = null

        return valorRemovido
    }

    removerEmPosicao(posicao: number): number | null {

        if (this.inicio == null) {
            return null
        }

        if (posicao <= 1) {
            return this.removerNoInicio()
        }

        if (posicao >= this.quantidadeDeElementos()) {
            return this.removerNoFinal()
        }

        let aux: Elemento | null = this.inicio
        let indice = 1

        while (aux != null && indice < posicao) {
            aux = aux.proximo
            indice++
        }

        let valorRemovido = aux!.valor

        aux!.anterior!.proximo = aux!.proximo
        aux!.proximo!.anterior = aux!.anterior

        return valorRemovido
    }

    verificarSeExiste(valor: number): boolean {

        let aux = this.inicio

        while (aux != null) {
            if (aux.valor == valor) {
                return true
            }
            aux = aux.proximo
        }

        return false
    }

    verificarSeEstaVazia(): boolean {
        return this.inicio == null
    }

    quantidadeDeElementos(): number {

        let aux: Elemento | null = this.inicio
        let contador: number = 0

        while (aux != null) {
            contador++
            aux = aux.proximo
        }

        return contador
    }

    exibirDoInicioAoFim(): void {

        let aux = this.inicio

        if (aux == null) {
            console.log("Lista Vazia!")
            return
        }

        let resultado = ""

        while (aux != null) {
            resultado += aux.valor + " "
            aux = aux.proximo
        }

        console.log(resultado)
    }

    exibirDoFimAoInicio(): void {

        if (this.inicio == null) {
            console.log("Lista Vazia!")
            return
        }

        let aux: Elemento | null = this.inicio

        while (aux != null && aux.proximo != null) {
            aux = aux.proximo
        }

        let resultado = ""

        while (aux != null) {
            resultado += aux.valor + " "
            aux = aux.anterior
        }

        console.log(resultado)
    }
}
