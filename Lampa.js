<<<<<<< HEAD
export default class Lampa{
    #allapot;
    #lampaIndex;
    constructor(allapot, index, szuloElem) {
      this.#allapot = allapot;
      this.#lampaIndex = index;
      this.szuloElem = szuloElem;
      this.megjelenit();
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
=======
export default class Lampa {
  #allapot;
  #lampaIndex;
  constructor(allapot, index, szuloElem) {
    this.#allapot = allapot;
    this.#lampaIndex = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.lampaElem = document.querySelector(".el:last-child");
    this.lampaElem.addEventListener("click", () => {
      const esemeny = new CustomEvent("kivalaszt", { detail: this.#lampaIndex });
      window.dispatchEvent(esemeny);
    });
  }

  megjelenit() {
    let html;
    if (this.#allapot === false) {
      html = `<div class="el elem">
>>>>>>> e0fd5cb9ba43128d1f5523648184a38723f47394
                  </div>`;
    } else {
      html = `<div class="el elemValt">
                    </div>`;
<<<<<<< HEAD
      }
      this.szuloElem.insertAdjacentHTML("beforeend", html);
=======
>>>>>>> e0fd5cb9ba43128d1f5523648184a38723f47394
    }
    // HTML DOM okjektumot készít
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
