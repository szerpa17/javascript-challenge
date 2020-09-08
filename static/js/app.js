// from data.js
var tableData = data;
// Variable to select the html table body
// This will be used to load the data onto the site
var tbody = d3.select('tbody');
// Variables for listener
var button = d3.select('button');
var form = d3.select('#form');

// Function that will render data into the site html table
function renderData(data) {
    // For each object in the entered data variable
    data.forEach(rowData => {
      // Append table row to designated html location
      var row = tbody.append('tr')
      // For each value in the object iteration 
      Object.values(rowData).forEach(val => {
        //  Append a table cell element
        var cell = row.append('td')
        // Add value text to the cell 
        cell.text(val)
      });
    });
  }
  
// Render the table values
renderData(tableData);

// // Listening function specific to date form filter
// function filterTable() {
//   // Prevent page refresh
//   d3.event.preventDefault();
//   // Empty prior loaded html table (for filtered items to be loaded)
//   tbody.html('');
//   // Create date variable to hold user form input
//   var date = d3.select("#datetime").property('value');
//   // Conditional testing if date is true (non-blank) 
//   if (date) {
//     // Create filteredData variable that holds the filtered data
//     var filteredData = tableData.filter(row => row.datetime == date);
//     // Render the filtered data
//     renderData(filteredData );
//     }
//   // If date was left blank
//   else {
//     // Re-render the unfiltered table
//     renderData(tableData);
//   }
//   // Clear input form data
//   d3.select('input').property('value', '');
// };

// Create variables to hold multi user form input
var date = d3.select("#datetime").property('value');
var city = d3.select("#city").property('value');
var state = d3.select("#state").property('value');
var country = d3.select("#country").property('value');
var shape = d3.select("#shape").property('value');

// Listening function for multiple user inputs
function multiFilter(data) {
  
}

// Listener
button.on("click", filterTable);
// form.on("change", filterTable); 

