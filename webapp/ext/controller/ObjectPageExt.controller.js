sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        Delete: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});