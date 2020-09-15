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



// Listening function for all filters
function multiFilter() {
  
  // Prevent page refresh
  d3.event.preventDefault();
 
  // Create variables to hold multi user form input
  var date = d3.select("#datetime").property('value');
  var city = d3.select("#city").property('value');
  var state = d3.select("#state").property('value');
  var country = d3.select("#country").property('value');
  var shape = d3.select("#shape").property('value');
     
  // Empty prior loaded html table (for filtered items to be loaded)
  tbody.html('');
 
  // Load all data
  var mfilteredData = tableData
  // Conditional, when variable length is 0, filtering does not take place
  if (date.length === 0){
    // No action
  }   else{
    //  Filter by this variable
    mfilteredData = mfilteredData.filter(row => row.datetime == date);
    // Clear input form data
      // d3.select('#datetime').property('value', '');
   }
  
  if (city.length === 0){
    // No action
  }   else{
  //  Filter by this variable
    mfilteredData = mfilteredData.filter(row => row.city == city);
    // Clear input form data
      // d3.select("#city").property('value', '');
   }
  
   if (state.length === 0){
    // No action
  }   else{
    //  Filter by this variable
    mfilteredData = mfilteredData.filter(row => row.state == state);
    // Clear input form data
      // d3.select("#state").property('value', '');
   }
   if (country.length === 0){
     // No action
    }   else{
    //  Filter by this variable
    mfilteredData = mfilteredData.filter(row => row.country == country);
    // Clear input form data
      // d3.select("#country").property('value', '');
   }
   if (shape.length === 0){
    // No action
   }   else{
    //  Filter by this variable
    mfilteredData = mfilteredData.filter(row => row.shape == shape);
    // Clear input form data
      // d3.select("#shape").property('value', '');
   }
   // Render the filtered data
   renderData(mfilteredData);
}

// Listener
inputs.on('change', multiFilter);

reset_button.on("click", () => {
  // Prevent page refresh
  d3.event.preventDefault();

  // Clears all values
  inputs.property('value','');

  // Renders the unfiltered dataset
  renderData(tableData)
});
