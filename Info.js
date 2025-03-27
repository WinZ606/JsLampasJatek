export default class Info{
    
    constructor(szuloElem, db){
        this.szuloElem = szuloElem
        this.db = db;
        this.#megjelenit(db)
    }

<<<<<<< HEAD
    #megjelenit(db){
        this.szuloElem.innerHTML=`<p>Kapcsold le a lehető legtöbb lámpát!<br>(Legyen az összes zöld!)<br>A lekapcsolt lámpák száma: </p><h2>${db}</h2` 
=======
    #megjelenit(szuloElem){
        this.szuloElem.innerHTML= szuloElem
>>>>>>> e0fd5cb9ba43128d1f5523648184a38723f47394
    }
    
}