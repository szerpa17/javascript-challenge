// from data.js
var tableData = data;
// Create variable to select the html table body
// This will be used to load the data onto the site
var tbody = d3.select('tbody');

// Function that will render data into the site html table
function renderData(data) {
    // For each object in the entered data variable
    data.forEach(rowData => {
      // Append table row
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
  
// Render the table
renderData(tableData);
