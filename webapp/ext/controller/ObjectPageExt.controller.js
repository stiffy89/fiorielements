sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/ControllerExtension"
], function(MessageToast, ControllerExtension) {
    'use strict';

    return ControllerExtension.extend('ns.fiorielements.ext.controller.ObjectPageExt', {
        TimeElapsedFormatter: function (source){
            console.log(source);
            return "";
        }
    }) 
});