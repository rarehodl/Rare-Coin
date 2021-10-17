function createMenu() {
    SpreadsheetApp.getUi().createMenu("Crypto")
     .addItem("Get percentage", "getPercentage")
     .addToUi();
 }
 
 function getPercentage(){
    calculatePercentage();
 }