import Lampa from "./Lampa.js";

export default class JatekTer{
    #lista = ["", "", "", "", "", "", "", "", ""];

    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#megjelenit()
        this.#esemenykezelo();
    }

    #megjelenit() {
        for (let index = 0; index < this.#lista.length; index++) {
            new Lampa(false, index, this.szuloElem);
        }
    }

    #esemenykezelo() {
        window.addEventListener("kivalaszt", (event) => {
            
        });
    }

    ellenoriz(){
        
    }

}