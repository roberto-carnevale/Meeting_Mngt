function doGet(e) {
  var params = JSON.stringify(e);
  Logger.log(params);
  let query = e.queryString;
  
  let data = SpreadsheetApp.openById('1ioPOH3FsNNEGbJ6rqR6pdb_4p8Q86iqzOvqziC0aARE').getSheetByName('setup').getDataRange().getValues();
  
  var index = -1;
  for (let i in data) {
    Logger.log(data[i][0]);
    if (data[i][0] == query && data[i][3] == true) {index= parseInt(i);}
  }
  var html = HtmlService.createTemplateFromFile("page");
  html.index = index;
  return html.evaluate();
}

function test() {getStatus(1);}

function getStatus(index) {
  var html = HtmlService.createTemplateFromFile("status");
  let data = SpreadsheetApp.openById('1ioPOH3FsNNEGbJ6rqR6pdb_4p8Q86iqzOvqziC0aARE').getSheetByName('setup').getDataRange().getValues();

  html.data = data;
  html.log = Logger.getLog();
  html.index = index;
  return html.evaluate().getContent();

}

function setStatus(index, status) {
  SpreadsheetApp.openById('1ioPOH3FsNNEGbJ6rqR6pdb_4p8Q86iqzOvqziC0aARE').getSheetByName('setup').getRange(parseInt(index)+1, 2,1,1).setValue(status);
  return index;
}
