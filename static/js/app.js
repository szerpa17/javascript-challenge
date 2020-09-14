// from data.js
var tableData = data;
// Variable to select the html table body
// This will be used to load the data onto the site
var tbody = d3.select('tbody');
// Variables for listener
var button = d3.select('button');
var form = d3.select('#form-control');

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

// Listening function specific to date form filter
function filterTable() {
  // Prevent page refresh
  d3.event.preventDefault();
  // Empty prior loaded html table (for filtered items to be loaded)
  tbody.html('');
  // Create date variable to hold user form input
  var date = d3.select("#datetime").property('value');
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

// // Listening function for all filters
function multiFilter() {
  // Prevent page refresh
  d3.event.preventDefault();
 
  // Create variables to hold multi user form input
  var date = d3.select("#datetime").property('value');
  var city = d3.select("#city").property('value');
  var state = d3.select("#state").property('value');
  var country = d3.select("#country").property('value');
  var shape = d3.select("#shape").property('value');
     
  // Empty prior loaded html table (for filtered items to be loaded)
  tbody.html('');
 
  var mfilteredData = tableData

  if (date.length === 0){
    // 
    mfilteredData
  }  else {
    mfilteredData = mfilteredData.filter(row => row.datetime == date);
    // Clear input form data
      d3.select('#datetime').property('value', '');
   }
  
  if (city.length === 0){
    mfilteredData
   }   else{
    mfilteredData = mfilteredData.filter(row => row.city == city);
    // Clear input form data
      d3.select("#city").property('value', '');
   }
  
   if (state.length === 0){
    mfilteredData
   }   else{
    mfilteredData = mfilteredData.filter(row => row.state == state);
    // Clear input form data
      d3.select("#state").property('value', '');
   }

   if (country.length === 0){
    mfilteredData
   }   else{
    mfilteredData = mfilteredData.filter(row => row.country == country);
    // Clear input form data
      d3.select("#country").property('value', '');
   }

   if (shape.length === 0){
    mfilteredData
   }   else{
    mfilteredData = mfilteredData.filter(row => row.shape == shape);
    // Clear input form data
      d3.select("#shape").property('value', '');
   }

   // Render the filtered data
   renderData(mfilteredData);

}

// Listener
button.on("click", multiFilter);
// }
  
















// function filterTable() {
// // Create variables to hold multi user form input
// var date = d3.select("#datetime").property('value');
// var city = d3.select("#city").property('value');
// var state = d3.select("#state").property('value');
// var country = d3.select("#country").property('value');
// var shape = d3.select("#shape").property('value');


 
// chain filter function 
// or filter results
// assign a default value in the html fields
//  what to do with empty fields - conditional, if there is a value or if value is not null, then run filter or go to next one
// # leave field empty and log it to see what it returns
// look up chainign javascript filters -- 
// }

// Listening function for multiple user inputs


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


// Listening function for all filters
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
 
//   if (date === undefined){
//    //  Auto load all data
//    var filteredData = tableData
//    }
 // (date !== undefined){
     
 //   filteredData = tableData.filter(row => row.datetime == date);
 //   // .filter(row => row.city == city)
 //   // .filter(row => row.state == state)
 //   // .filter(row => row.country == country)
 //   // .filter(row => row.shape == shape)
 //   ;
 //  };
   
 //   if (city !== undefined){
 
 //   var filteredData = filteredData.filter(row => row.city == city);
   
 //  };
 
 //  else {
 
 //  }
 
 //  .filter(row => row.city == city);
 
//   // Re-render the unfiltered table
//   renderData(filteredData);
 
//   // Clear input form data
//    d3.select('input').property('value', '');
//  }
 
//  // Listener
//  button.on("click", multiFilter);
 