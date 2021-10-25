function getTransactionFee() {
    var module = 'account';
    var action = 'txlist';
    var address = '0x292c595329f3F0822955aaf13cB6273c70286f6A'
    var apiKey = 'YOUR_API_KEY';
    var startBlock = 0;
    var endBlock = 99999999999999999999;
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
    var url = `https://api.bscscan.com/api?module=${module}&action=${action}&address=${address}&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${apiKey}`
    var response = UrlFetchApp.fetch(url);
    var responseJSON = JSON.parse(response);
    for(i=0;i<responseJSON.result.length;i++){
      activeSpreadsheet.getSheetByName("txnFee").getRange(i+2,1).setValue(getDateText(parseInt(responseJSON.result[i].timeStamp)));
      activeSpreadsheet.getSheetByName("txnFee").getRange(i+2,2).setValue((parseInt(responseJSON.result[i].gasUsed))*(parseInt(responseJSON.result[i].gasPrice)/ 10 ** 18));
      activeSpreadsheet.getSheetByName("txnFee").getRange(i+2,3).setValue((responseJSON.result[i].hash));
    }
  }
  
  function getDateText(timeStamp) {
      let date = new Date(timeStamp*1000);
      return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }