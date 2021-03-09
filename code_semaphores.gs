function doGet() {
  return HtmlService.createHtmlOutputFromFile("page");
}

function reloadArea() {
  let html = HtmlService.createTemplateFromFile("area");
  let data = SpreadsheetApp.openById('1ioPOH3FsNNEGbJ6rqR6pdb_4p8Q86iqzOvqziC0aARE').getSheetByName('setup').getDataRange().getValues();
  html.data = data;
  try {
    return html.evaluate().getContent();
  } catch (err) 
  {
    Logger.log(err.toString());
  }

}
