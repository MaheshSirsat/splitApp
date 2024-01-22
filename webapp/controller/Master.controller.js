sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter) {
        "use strict";

        return Controller.extend("splitapp.controller.Master", {
            onInit: function () {

            },
            initailupdrequired:true,
            selectList(oEvent) {
                var select = oEvent.getParameter("listItem").getBindingContextPath()
                select = select.split("(")[1].split(")")[0];

                //will get id from Products(1) to 1
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Product", {
                    productid: select
                })
            },
            onsearch(oEvent) {
                var value = oEvent.getParameter('newValue')
                console.log(value);
                var filter = new Filter('ProductName', sap.ui.model.FilterOperator.Contains, value)
                var aFilter = [filter]
                var oList = this.getView().byId('idMasterlist')
                oList.getBinding("items").filter(aFilter)
            },
            intupd(oEvent) {
                if(this.initailupdrequired){
                    this.initailupdrequired=false
                    var oList = oEvent.getSource()
                    var path = oList.getItems()[1].getBindingContextPath()
                    oList.setSelectedItem(oList.getItems()[1])
                    path=path.split("(")[1].split(")")[0];
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("Product", {
                        productid: path
                    })
                }
               
            }
        });
    });
