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

// Element being listened for
button.on("click", filterTable);
// form.on("change", filterTable);

// Listening function
function filterTable() {
  // Prevent page refresh
  d3.event.preventDefault();
  // Empty prior loaded html table (for filtered items to be loaded)
  tbody.html('');
  // Create date variable to hold user form input
  var date = d3.select('input').property('value');
  // Conditional testing if date is true (non-blank) 
  if (date) {
    // Create filteredData variable that holds the filtered data
    var filteredData = tableData.filter(row => row.datetime == date);
    // Render the filtered data
    renderData(filteredData );
    }
  // If date was left blank
  else {
    // Re-render the unfiltered table
    renderData(tableData);
  }
  // Clear input form data
  d3.select('input').property('value', '');
};

