sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller,JSONModel) {
	"use strict";

	return Controller.extend("demo_ui5.demo_ui5.controller.View1", {
		onInit: function () {

			// debugger;
			this.oModel=new JSONModel();
			
		var that = this;
			  $.ajax({
    type: "GET",
    
    crossDomain: true,
    headers : {
        "Access-Control-Allow-Origin" : "*"
    },
   // url: "https://7ee20xvkllewlgx0-demo-demo-node.cfapps.us10.hana.ondemand.com/data/xsjs/demo.xsjs",
    url: " proxy/https/7ee20xvkllewlgx0-demo-demo-node.cfapps.us10.hana.ondemand.com/data/xsodata/demo.xsodata/crud?$format=json",
    dataType:"json"
    
    
  
   
        
} ).done(function(pdata){ 

        that.oModel.setData(pdata);
			
//console.log(pdata.results);


      
   // oModel.setData(arr);
     that.getView().setModel(that.oModel); 

 });

		}
	});
});