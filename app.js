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

// Create a filter button
function handleClick(){
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // Initialize the 'Default' filter
    let filterData = tableData;
    
    // Check for a date filter
    if (date) {
        // Apply filter to the table data to only keep the rows
        // that match filtered date
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // show filtered data in tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);