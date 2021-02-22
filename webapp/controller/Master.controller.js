sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/resource/ResourceModel",
    "sap/m/MessageToast"
  ],
  function (Controller, History, ResourceModel, MessageToast) {
    "use strict";

    return Controller.extend("com.iodigitalsolutions.test.controller.Master", {
      onInit: function () {
        var i18nModel = new ResourceModel({
          bundleName: "com.iodigitalsolutions.test.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
        //  this.getRouter().initialize();
        if (location.reload) {
          history.pushState({ page: 1 }, "title 1", "?page=1");
        }
      },

      lang: function (oEvent) {
        var control = oEvent.getSource();
        var state = control.getState();

        if (state) {
          sap.ui.getCore().getConfiguration().setLanguage("de");
        } else {
          sap.ui.getCore().getConfiguration().setLanguage("en");
        }
      },

      loadData: function () {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var supermodel = new sap.ui.model.json.JSONModel(
          "model/superheros.json"
        );
        this.getView().setModel(supermodel, "superheros");

        supermodel.attachRequestCompleted(function (oEvent) {
          var messageToastText = oBundle.getText("DataHasBeenLoaded");
          MessageToast.show(messageToastText);
        });
      },

      dataLoaded: function () {},

      openPopup: function () {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();

        var dialogTitle = oBundle.getText("ThisIsADialog");
        var CloseButtonText = oBundle.getText("Close");

        var oDialog = new sap.m.Dialog({
          title: dialogTitle,

          contentWidth: "480px",
          content: [
            new sap.m.Text({
              text:
                "Guten Tag, willkommen bei einer einfachen SAPUI5-Webanwendung",
            }),
          ],

          beginButton: new sap.m.Button({
            press: function () {
              oDialog.close();
            },
            text: CloseButtonText,
          }),
        });
        oDialog.open();
      },

      navPage2: function () {
        this.getView().byId("app").to(this.getView().byId("page2"));
        history.pushState({ page: 2 }, "title 2", "?page=2");
      },

      navPage3: function () {
        this.getView().byId("app").to(this.getView().byId("page3"));
        history.pushState({ page: 3 }, "title 3", "?page=3");
      },

      navPage4: function () {
        this.getView().byId("app").to(this.getView().byId("page4"));
        history.pushState({ page: 4 }, "title 4", "?page=4");
      },

      getRouter: function () {
        return sap.ui.core.UIComponent.getRouterFor(this);
      },

      navBack: function () {
        
      var pageId="page"+(history.state.page-1);   
      this.getView().byId("app").to(this.getView().byId(pageId));
      window.history.go(-1);
       /* switch (history.state.page) {
          case 2:
            this.getView().byId("app").to(this.getView().byId("page1"));
            window.history.go(-1);
            break;
          case 3:
            this.getView().byId("app").to(this.getView().byId("page2"));
            window.history.go(-1);
            break;
          case 4:
            this.getView().byId("app").to(this.getView().byId("page3"));
            window.history.go(-1);
            break;
        } */
       
      },
    });
  }
);
