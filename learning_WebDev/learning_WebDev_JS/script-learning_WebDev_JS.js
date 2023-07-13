function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
   
    table.appendChild(tableBody);
    document.getElementById("reservedWords").appendChild(table);
  }
  
  createTable([
    ["as", "const", "export", "get", "null", "target", "void"], 
    ["async", "continue", "extends", "if", "of", "this", "while"], 
    ["await", "debugger", "false", "import", "return", "throw", "with"],
    ["break", "default", "finally", "in", "set", "true", "yield"], 
    ["case", "delete", "for", "instanceof", "static", "try"], 
    ["catch", "do", "from", "let", "super", "typeof"], 
    ["class", "else", "function", "new", "switch", "var"]
  ]);

