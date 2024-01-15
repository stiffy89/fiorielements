sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/ControllerExtension"
], function(MessageToast, ControllerExtension) {
    'use strict';

    return ControllerExtension.extend('ns.fiorielements.ext.controller.ObjectPageExt', {
        
        Delete: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        },
        DateFormatter: function (source) {
            if (source){
                return new Date(source).toDateString();
            } else {
                return source
            }
        }
    }) 
});