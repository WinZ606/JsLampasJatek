import Info from "./Info.js";
import Lampa from "./Lampa.js";

export default class JatekTer {
  #lista = [false, false, false, false, false, false, false, false, false];

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
          let index = event.detail;
          let sor = Math.floor(index / 3);
          let oszlop = index % 3;

          this.#lista[index] = !this.#lista[index];
          if (sor > 0) {
            this.#lista[index - 3] = !this.#lista[index - 3];
          }
          if (sor < 2) {
            this.#lista[index + 3] = !this.#lista[index + 3];
          }
          if (oszlop > 0) {
            this.#lista[index - 1] = !this.#lista[index - 1];
          }
          if (oszlop < 2) {
            this.#lista[index + 1] = !this.#lista[index + 1];
          }
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
        this.ellenoriz(db)
    }

    ellenoriz(db){
        if (db === this.#lista.length){
            alert("Nyertél!")
        }
    }
}
