import Lampa from "./Lampa.js";

export default class JatekTer {
  #lista = [false, true, true, false, true, false, false, true, false];

  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.#megjelenit();
    this.#esemenykezelo();
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
    });
  }     
}
