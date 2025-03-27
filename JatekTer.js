import Info from "./Info.js";
import Lampa from "./Lampa.js";

export default class JatekTer {
  #lista = [false, true, true, false, true, false, false, true, false];

<<<<<<< HEAD
    constructor(szuloElem, infoElem){
        this.szuloElem = szuloElem;
        this.infoElem = infoElem;
        this.#megjelenit()
        this.#esemenykezelo();
        this.infoMegjelenit()
=======
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.#megjelenit();
    this.#esemenykezelo();
  }

  #megjelenit() {
    this.szuloElem.innerHTML = "";
    for (let index = 0; index < this.#lista.length; index++) {
      new Lampa(this.#lista[index], index, this.szuloElem);
>>>>>>> e0fd5cb9ba43128d1f5523648184a38723f47394
    }
  }

<<<<<<< HEAD
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
=======
  #esemenykezelo() {
    window.addEventListener("kivalaszt", (event) => {
      this.#lista[event.detail] = !this.#lista[event.detail];
      this.#megjelenit();
    });
  }     
}
>>>>>>> e0fd5cb9ba43128d1f5523648184a38723f47394
