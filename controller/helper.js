
// Helper function
function parseDataForInternal(tableData) {
    // row numbers 
    // 0 - sub code
    // 1 - sub name
    // 3 - sess1 marks
    // 9 - sess2
    // 15 - sess3
    // 21 - block

    console.table(tableData[0]);
    console.table(tableData[1]);
    console.table(tableData[3]);
    console.table(tableData[9]);
    console.table(tableData[15]);
    console.table(tableData[21]);

    var jsonResponse = [];

    var cols = { 
        "Subject Code" : "Subject Code",
        "Subject Name" : "Subject Name",
        "Sessional - 01" : "Sessional - 01",
        "Sessional - 02" : "Sessional - 02",
        "Sessional - 03" : "Sessional - 03",
        "Block Exam" : "Block Exam",
    }
    jsonResponse.push(cols);

    for(let i = 1 ; i < tableData[0].length ; i++)
    {
        var json = {
            "Subject Code" : tableData[0][i],
            "Subject Name" : tableData[1][i],
            "Sessional - 01" : tableData[3][i],
            "Sessional - 02" : tableData[9][i],
            "Sessional - 03" : tableData[15][i],
            "Block Exam" : tableData[21][i]
        }
        jsonResponse.push(json);
    }

    return jsonResponse;
}

// Helper function
function parseDataForExternal(tableData) {
    // rows
    // 1 - sub code
    // 2 - sub name
    // 3 - ext marks
    // 4 - Ext status
    // 5 - sess avg marks
    // 6 - sess status
    // 7 - practical marks
    // 8 - practical status
    // 9 - termwork marks
    // 10 - termwork status
    // 11 - total marks
    // 12 - max marks
    // 13 - subject points
    // 14 - sub grade
    // 15 - subject credit
    // 16 - subject status

    console.table(tableData[1]);
    console.table(tableData[2]);
    console.table(tableData[3]);
    console.table(tableData[4]);
    console.table(tableData[5]);
    console.table(tableData[6]);
    console.table(tableData[7]);
    console.table(tableData[8]);
    console.table(tableData[9]);
    console.table(tableData[10]);
    console.table(tableData[11]);
    console.table(tableData[12]);
    console.table(tableData[13]);
    console.table(tableData[14]);
    console.table(tableData[15]);
    console.table(tableData[16])

    var jsonResponse = [];

    var cols = { 
        "Subject Code" : "Subject Code",
        "Subject Name" : "Subject Name",
        "External Marks" : "External Marks",
        "External Status" : "External Status",
        "Sessional Average Marks" : "Sessional Average Marks",
        "Sessional Status" : "Sessional Status",
        "Practical Marks" : "Practical Marks",
        "Practical Status" : "Practical Status",
        "TermWork Marks" : "TermWork Marks",
        "TermWork Status" : "Termwork Status",
        "Total Marks" : "Total Marks",
        "Max Marks" : "Max Marks",
        "Subject Points" : "Subject Points",
        "Subject Grade" : "Subject Grade",
        "Subject Credit" : "Subject Credit",
        "Subject Status" : "Subject Status"
    }
    jsonResponse.push(cols);

    for(let i = 1 ; i < tableData[0].length ; i++)
    {
        var json = {
            "Subject Code" : tableData[1][i],
            "Subject Name" : tableData[2][i],
            "External Marks" : tableData[3][i],
            "External Status" : tableData[4][i],
            "Sessional Average Marks" : tableData[5][i],
            "Sessional Status" : tableData[6][i],
            "Practical Marks" : tableData[7][i],
            "Practical Status" : tableData[8][i],
            "TermWork Marks" : tableData[9][i],
            "TermWork Status" : tableData[10][i],
            "Total Marks" : tableData[11][i],
            "Max Marks" : tableData[12][i],
            "Subject Points" : tableData[13][i],
            "Subject Grade" : tableData[14][i],
            "Subject Credit" : tableData[15][i],
            "Subject Status" : tableData[16][i]
        }
        jsonResponse.push(json);
    }

    return jsonResponse;    
}

module.exports = {
  parseDataForExternal,
  parseDataForInternal  
};