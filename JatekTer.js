import Info from "./Info.js";
import Lampa from "./Lampa.js";

export default class JatekTer {
  #lista = [false, true, true, false, true, false, false, true, false];

    constructor(szuloElem, infoElem){
        this.szuloElem = szuloElem;
        this.infoElem = infoElem;
        this.#megjelenit()
        this.#esemenykezelo();
        this.infoMegjelenit()
    }

    #megjelenit() {
        this.szuloElem.innerHTML = "";
        for (let index = 0; index < this.#lista.length; index++) {
            new Lampa(this.#lista[index], index, this.szuloElem);
        }
    }

    #esemenykezelo() {
        window.addEventListener("kivalaszt", (event) => {
            this.#lista[event.detail] = !this.#lista[event.detail];
            this.#megjelenit();
            this.infoMegjelenit();
        });
    }

    infoMegjelenit() {
        let db = 0;
        for (let index = 0; index < this.#lista.length; index++) {
            const elem = this.#lista[index];
            if (elem === true) {
                db++
            }
        }
        new Info(this.infoElem, db) 
    }

    ellenoriz(){
        
    }

}
