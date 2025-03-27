export default class Lampa{
    #allapot;
    #lampaIndex;
    constructor(allapot, index, szuloElem) {
      this.#allapot = allapot;
      this.#lampaIndex = index;
      this.szuloElem = szuloElem;
      this.megjelenit();
      console.log(this.#allapot)
      this.lampaElem = document.querySelector(".el:last-child")
      this.lampaElem.addEventListener("click", ()=> {
        const esemeny = new CustomEvent("kivalaszt", {detail: this.#lampaIndex})
        window.dispatchEvent(esemeny)
      })
    }
  
    megjelenit() {
      let html;
      if (this.#allapot === false) {
        html = `<div class="el elem">
                  </div>`;
      } else {
        html = `<div class="el elemValt">
                    </div>`;
      }
      // HTML DOM okjektumot készít
      this.szuloElem.insertAdjacentHTML("beforeend", html);
    }
  }