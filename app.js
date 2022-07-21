// import the data from the data.js file
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a Table
function buildTable(data){
    // Clear out any existing data
    tbody.html(" ");
    // Loop thru each object in the data
    //append a row and cells for each object value in that row
    data.forEach((dataRow)=>{
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop thru each field(object) in the dataRow and
        // add each value as a table cell (td)
        Object.values(dataRow).forEach((val)=>{
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}