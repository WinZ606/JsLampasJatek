export default class Lampa{
    #allapot;
    #lampaIndex;
    constructor(allapot, index, szuloElem) {
      this.#allapot = allapot;
      this.#lampaIndex = index;
      this.szuloElem = szuloElem;
      this.megjelenit();
      this.lampaElem = document.querySelector(".elem:last-child")
      this.lampaElem.addEventListener("click", ()=> {
        const esemeny = new CustomEvent("kivalaszt", {detail: this.#lampaIndex})
        window.dispatchEvent(esemeny)
      })
    }
  
    megjelenit() {
      let html = `<div class="elem">

                  </div>`;
      // HTML DOM okjektumot készít
      this.szuloElem.insertAdjacentHTML("beforeend", html);
    }
  }