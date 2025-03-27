import Lampa from "./Lampa.js";

export default class JatekTer{
    #lista = [false, true, true, false, true, false, false, true, false];

    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#megjelenit()
        this.#esemenykezelo();
    }

    #megjelenit() {
        console.log("megjelenit")
        console.log(this.#lista)
        for (let index = 0; index < this.#lista.length; index++) {
            new Lampa(this.#lista[index], index, this.szuloElem);
        }
    }

    #esemenykezelo() {
        window.addEventListener("kivalaszt", (event) => {
          console.log(event.detail);
        });
    }

    ellenoriz(){
        
    }

}