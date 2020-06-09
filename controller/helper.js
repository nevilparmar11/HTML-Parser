
// Helper function
function parseDataForInternal(tableData) {
    // row numbers 
    // 0 - sub code
    // 1 - sub name
    // 3 - sess1 
    // 9 - sess2
    // 15 - sess3
    // 21 - block

    console.table(tableData[0]);
    console.table(tableData[1]);
    console.table(tableData[3]);
    console.table(tableData[9]);
    console.table(tableData[15]);
    console.table(tableData[21]);

    var jsonResponse = tableData[0] + "<br>" +
        tableData[1] + "<br>" +
        tableData[3] + "<br>" +
        tableData[9] + "<br>" +
        tableData[15] + "<br>" +
        tableData[21] + "<br>";

    return jsonResponse;
}

// Helper function
function parseDataForExternal(tableData) {
    // rows
    // 1 - sub code
    // 2 - sub name
    // 3 - ext marks
    // 5 - sess avg marks
    // 7 - practical marks
    // 9 - termwork marks
    // 11 - total marks
    // 13 - subject points
    // 14 - sub grade
    //15 - subject credit

    console.table(tableData[1]);
    console.table(tableData[2]);
    console.table(tableData[3]);
    console.table(tableData[5]);
    console.table(tableData[7]);
    console.table(tableData[9]);
    console.table(tableData[11]);
    console.table(tableData[13]);
    console.table(tableData[14]);
    console.table(tableData[15]);

    var jsonResponse = tableData[1] + "<br>" +
        tableData[2] + "<br>" +
        tableData[3] + "<br>" +
        tableData[5] + "<br>" +
        tableData[7] + "<br>" +
        tableData[9] + "<br>" +
        tableData[11] + "<br>" +
        tableData[13] + "<br>" +
        tableData[14] + "<br>" +
        tableData[15] + "<br>";

    return jsonResponse;    
}

module.exports = {
  parseDataForExternal,
  parseDataForInternal  
};