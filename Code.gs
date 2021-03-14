function doGet(e) {
  var params = JSON.stringify(e);
  Logger.log(params);
  let query = e.queryString;
  Logger.log(query);
  
  let set_data = SpreadsheetApp.openById('1ioPOH3FsNNEGbJ6rqR6pdb_4p8Q86iqzOvqziC0aARE').getSheetByName('setup').getDataRange().getValues();
  let meet_data = SpreadsheetApp.openById('1ioPOH3FsNNEGbJ6rqR6pdb_4p8Q86iqzOvqziC0aARE').getSheetByName('appuntamenti').getDataRange().getValues();
  let avvisi = SpreadsheetApp.openById('1ioPOH3FsNNEGbJ6rqR6pdb_4p8Q86iqzOvqziC0aARE').getSheetByName('Avvisi').getRange("A1").getValue();
  
  let set_list = {};
  for (let i in set_data) {
    set_list[set_data[i][0]] = set_data[i][2];
  }

  if (query) {
    var html = HtmlService.createTemplateFromFile("Int_page");
    html.data = meet_data;
    html.name = set_list[query];
    html.query = query;
    html.list = set_list;
    let ev = html.evaluate();
    Logger.log(ev.getContent());
    return ev;
  } else {
    var html = HtmlService.createTemplateFromFile("Ext_split_page");
    html.data = meet_data;
    html.avvisi = avvisi;
    html.data_split = split_data(set_data, meet_data);
    html.query = query
    html.list = set_list;
    html.days = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];
    let ev = html.evaluate();
    Logger.log(ev.getContent());
    return ev;
  }

}

function split_data(data, list) {
  var split = {};
  for (let i in data) {
    split[data[i][0]] = {};
    split[data[i][0]].code = data[i][0];
    split[data[i][0]].name = data[i][2];
    split[data[i][0]].active = data[i][3];
    split[data[i][0]].meeting = [];
    //Logger.log(JSON.stringify(split));
  }
  for (let j in list) {
    try {
      split[list[j][0]].meeting.push({ line: j, data: list[j] })
    } catch (err) {
      Logger.log(err.toString());
      //MailApp.sendEmail("ing.roberto.carnevale@gmail.com", "split_data Exception", err.toString());
    }
  }
  Logger.log(JSON.stringify(split));
  return split;
}

function prenota(nome, i) {
  try {
    let range = SpreadsheetApp.openById('1ioPOH3FsNNEGbJ6rqR6pdb_4p8Q86iqzOvqziC0aARE').getSheetByName('appuntamenti').getRange(parseInt(i)+1, 4)
    
    if (range.getValue() == "") {
      range.setValue(nome);
    }
    else {throw "duplicato";}
  } catch (err) {
    throw err;
  }
}

function cancella(i) {
  try {
    let range = SpreadsheetApp.openById('1ioPOH3FsNNEGbJ6rqR6pdb_4p8Q86iqzOvqziC0aARE').getSheetByName('appuntamenti').getRange(parseInt(i)+1, 4)
    
    if (range.getValue() != "") {
      range.setValue("");
    }
    else {throw "vuoto";}
  } catch (err) {
    throw err;
  }
}
