// from data.js
var tableData = data;
// Variable to select the html table body
// This will be used to load the data onto the site
var tbody = d3.select('tbody');
// Variables for listener
var reset_button = d3.select('#reset-btn');
// Collect all inputs and their properties
var inputs = d3.selectAll('input');

// Function that will render data into the site html table
function renderData(data) {
  // Clear prior loaded table
  tbody.html('');
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
  
// Render complete datatable on the page
renderData(tableData);

// Variable that holds all data to be filtered

var filteredData = tableData;

// Filter function that goes through all inputs
function filterFunctions() {
  d3.event.preventDefault();

  inputs._groups.forEach(filter => {
    // Assign the property ID to the key variable
    var key = d3.select(this).property('id');
    // Assign input value to the value variable
    var value = d3.select(this).property('value');

    // If the input value is not null, the data is filtered
    if (value) {
      // Using the key variable to look up the appropriate key in
      // the dataset
      filteredData = filteredData.filter(data => data[key] === value);
    }
  })
  
  // Final filtered data is rendered once loop is complete
  renderData(filteredData);
}

// Listener
inputs.on('change', filterFunctions);
// button.on("click", multiFilter);
reset_button.on("click", () => {
  // Clears all values
  inputs.property('value','');
  // Resets the filteredData variable
  filteredData = tableData;
  // Renders the unfiltered dataset
  renderData(tableData)});
