export class Elemento {
    public valor: number
    public proximo: Elemento | null
    public anterior : Elemento | null
    constructor(val: number){
        this.valor = val
        this.proximo = null
        this.anterior = null
    }
}