export default class Info{
    
    constructor(szuloElem, db){
        this.szuloElem = szuloElem
        this.db = db;
        this.#megjelenit(db)
    }

    #megjelenit(db){
        this.szuloElem.innerHTML=`<p>Kapcsold le a lehető legtöbb lámpát!<br>(Legyen az összes zöld!)<br>A lekapcsolt lámpák száma: </p><h2>${db}</h2` 
    }
    
}