var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var percentageColumn = 6;
var boughtColum = 5;
function calculatePercentage() {
    if(activeSpreadsheet.getSheetByName("RARECoin").getRange(2,percentageColumn).getValue() == ""){
        activeSpreadsheet.getSheetByName("RARECoin").getRange(2,percentageColumn).setValue(100);
    }
    lastRowRARECoin = activeSpreadsheet.getSheetByName("RARECoin").getLastRow();
    for(i=2;i<lastRowRARECoin+1;i++){
        boughtValue = activeSpreadsheet.getSheetByName("RARECoin").getRange(i,boughtColum).getValue();
        if(boughtValue != "no"){
            pecentageValue = activeSpreadsheet.getSheetByName("RARECoin").getRange(i - 1,percentageColumn).getValue();
            if(pecentageValue != "Percentage"){
                pecentageValue = parseFloat(pecentageValue)
                if(pecentageValue == 1.00){
                    activeSpreadsheet.getSheetByName("RARECoin").getRange(i,percentageColumn).setValue(1);
                }else{
                    activeSpreadsheet.getSheetByName("RARECoin").getRange(i,percentageColumn).setValue(pecentageValue +0.1);
                }
            }

        }else{
            activeSpreadsheet.getSheetByName("RARECoin").getRange(i,percentageColumn).setValue(0); 
        }
    }
}
