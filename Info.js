export default class Info{
    
    constructor(szuloElem){
        this.szuloElem = szuloElem
        this.#megjelenit()
    }

    #megjelenit(szuloElem){
        this.szuloElem.innerHTML= szuloElem
    }
    
}