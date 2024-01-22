sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("splitapp.controller.Detaildetail", {
        onInit(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Category").attachMatched(this.getId,this)
        },
        getId(oEvent){
            
            var id=oEvent.getParameter("arguments").categoryId
            console.log("dd",id);
            
            this.getView().bindElement("/Categories("+id+")")
          
        },
        navBack(){
            console.log(window.history.go(-1))
            window.history.go(-1)
        }
        
	});
});