// from data.js
var tableData = data;
// Variable to select the html table body
// This will be used to load the data onto the site
var tbody = d3.select('tbody');
// Variables for listener
var button = d3.select('#filter-btn');
var reset_button = d3.select('#reset-btn');
var inputs = d3.selectAll('input');

// Function that will render data into the site html table
function renderData(data) {
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

// // Listening function for all filters
// function multiFilter() {
//   // Prevent page refresh
//   d3.event.preventDefault();
 
//   // Create variables to hold multi user form input
//   var date = d3.select("#datetime").property('value');
//   var city = d3.select("#city").property('value');
//   var state = d3.select("#state").property('value');
//   var country = d3.select("#country").property('value');
//   var shape = d3.select("#shape").property('value');
     
//   // Empty prior loaded html table (for filtered items to be loaded)
//   tbody.html('');
 
//   // Load all data
//   var mfilteredData = tableData

//   // Conditional, when variable length is 0, filtering does not take place
//   if (date.length === 0){
//     // No action
//   }   else{
//     //  Filter by this variable
//     mfilteredData = mfilteredData.filter(row => row.datetime == date);
//     // Clear input form data
//       d3.select('#datetime').property('value', '');
//    }
  
//   if (city.length === 0){
//     // No action
//   }   else{
//   //  Filter by this variable
//     mfilteredData = mfilteredData.filter(row => row.city == city);
//     // Clear input form data
//       d3.select("#city").property('value', '');
//    }
  
//    if (state.length === 0){
//     // No action
//   }   else{
//     //  Filter by this variable
//     mfilteredData = mfilteredData.filter(row => row.state == state);
//     // Clear input form data
//       d3.select("#state").property('value', '');
//    }

//    if (country.length === 0){
//      // No action
//     }   else{
//     //  Filter by this variable
//     mfilteredData = mfilteredData.filter(row => row.country == country);
//     // Clear input form data
//       d3.select("#country").property('value', '');
//    }

//    if (shape.length === 0){
//     // No action
//    }   else{
//     //  Filter by this variable
//     mfilteredData = mfilteredData.filter(row => row.shape == shape);
//     // Clear input form data
//       d3.select("#shape").property('value', '');
//    }

//    // Render the filtered data
//    renderData(mfilteredData);

// }

var filteredData = tableData;
function filterFunctions() {
  d3.event.preventDefault();

  inputs._groups.forEach(filter => {
    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    if (value) {
      filteredData = filteredData.filter(data => data[key] === value);
    }
  })
  
  renderData(filteredData);
}

// Listener
inputs.on('change', filterFunctions);
// button.on("click", multiFilter);
reset_button.on("click", () => {
  inputs.property('value','');
  filteredData = tableData;
  renderData(tableData)});
