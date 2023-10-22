import AdatModel from "./AdatModel.js";
import AdatView from "./AdatView.js";

class AdatController{
    constructor(){
        console.log("controller");
        this.adatView=new AdatView("Kattints a gombra!", $(".tartalom"));
        this.adatModel=new AdatModel("Valaki");
        /**itt iratkozunk fel a view eseményeire */
        $(window).on("adatKeres", (event)=>{            
            const miObjektumunk= event.detail;
            console.log(miObjektumunk);
            let szoveg = this.adatModel.koszon();
            this.adatView.setPelem(szoveg);
        })
    }
}
export default AdatController;