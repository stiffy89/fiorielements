sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/ControllerExtension"
], function(MessageToast, ControllerExtension) {
    'use strict';

    return ControllerExtension.extend('ns.fiorielements.ext.controller.ObjectPageExt', {
        TimeElapsedFormatter: function (sStartDate, sEndDate){
            let timeDiff = new Date(sEndDate) - new Date(sStartDate);
            let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            return dayDiff + " days";
        }
    }) 
});