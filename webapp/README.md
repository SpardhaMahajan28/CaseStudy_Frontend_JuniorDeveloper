
> A small application developed using SAPUI5 library [API](https://sapui5.hana.ondemand.com/#/api). 🆕 🎉.<br>

Note: The namespace is sap.m.

> This project was made with <3 by Spardha Mahajan

## What is it?

The application will offer the following functions :<br>

- The application consists of several pages, which are defined in view/Master.view.xml<br>
- Possibility to navigate between the pages<br>
- Each page has a Title, a button to navigate to next page and another button to navigate to previous page<br>
- The pages have different elements/functionalities defined in controller/Master.controller.js<br>
- The application is available in english and german<br>

In the content of different pages following functionalities are provided :<br>

 - Page 1 contains button to display a pop-up dialog with title and close button and a sample text which is displayed in german<br>
 - In page 2 an image is displayed centered horizontally and vertically in a FlexBox<br>
 - A link to https://de.io-digitalsolutions.com/ is created in page 3 that opens in a separate page<br>
 - In page 4 a list of supermodels is displayed. The list is initially empty and on click of a Load button in the toolbar a list of superheros is loaded from superheros.json file and is displayed with a title and description.
 The successful loading of the data is indicated using MessageToast<br>
 

## Requirement

-   [Git](https://git-scm.com/downloads)
-   [Visual Studio Code] the Live Server extension is used for development. By right clicking on
index.html and "Open with Live Server" the application is displayed in the browser.

## Dependencies

["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", 
"sap/ui/model/resource/ResourceModel", "sap/m/MessageToast"]

These names are then passed as parameters (in the same order) to the factory function  as function(Controller, History, ResourceModel, MessageToast). The factory function is the second parameter passed in the call to sap.ui.define.