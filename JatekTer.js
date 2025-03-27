import Lampa from "./Lampa.js";

export default class JatekTer{
    #lista = ["", "", "", "", "", "", "", "", ""];

    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#megjelenit()
    }

    
    #megjelenit() {
        for (let index = 0; index < this.#lista.length; index++) {
            new Lampa(false, index, this.szuloElem);
        }
    }
    
    ellenoriz(){
        
    }

}