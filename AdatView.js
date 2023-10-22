class AdatView{
    constructor(szoveg, szuloElem){
        /**ha rákattintunk akkor a p tagbe írja ki a kapott szoveget */
        this.szuloElem=szuloElem;
        this.pElem= this.szuloElem.children("p");
        this.buttonElem=this.szuloElem.children("button");
        this.szoveg= szoveg;
        this.setPelem(this.szoveg);
        this.buttonElem.on("click", ()=>{
            console.log("katt")
            this.#esemenyTrigger("adatKeres");
        })
    }

    setPelem(ertek){
        this.pElem.append(ertek);
    }

    #esemenyTrigger(esemenynev){
        const e= new CustomEvent(esemenynev, {detail:this})
        window.dispatchEvent(e);
    }
}
export default AdatView;