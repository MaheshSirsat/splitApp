sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("splitapp.controller.Detail", {
        onInit(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Product").attachMatched(this.getId,this)
        },
        getId(oEvent){
            
            var id=oEvent.getParameter("arguments").productid
        
            this.getView().bindElement("/Products("+id+")")
          
        },
       
        listChange(oEvent){
            var oList = oEvent.getParameter("listItem")
            var select = oEvent.getParameter("listItem").getBindingContextPath()
            var model=this.getView().getModel()
            var id=model.getProperty(select+"/CategoryID")
  
            oList.setSelected(false)
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Category", {
                    categoryId:id
                })
        }
	});
});