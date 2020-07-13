// from data.js
var tableData = data;
console.log(tableData);

// Select the button
var filterButton = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
filterButton.on("click", findValue);
form.on("submit", findValue);

function findValue() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element
  var inputElement = d3.select(".form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);
  console.log(tableData);

  // Filter by datetime
  var filteredData = tableData.filter((x) => x.datetime === inputValue);

  var cityFilter = d3.select("#filteredCity");
  var countryFilter = d3.select("#filteredCountry");
  var shapeFilter = d3.select("#filteredShape");

  cityFilter = filteredData.filter((x) => x.city === cityFilter);
  console.log(cityFilter);

  if (countryFilter != "All") {
    countryFilter = filteredData.filter((x) => x.country === countryFilter);
  }

  if (shapeFilter != "All") {
    shapeFilter = filteredData.filter((x) => x.shape === shapeFilter);
  }

  // use d3 to select the table
  var table = d3.select(".table");

  // use d3 to select the table body
  var body = table.select("tbody");

  // Clear existing data
  table.select("tbody").html("");
  filteredData.forEach(function (list) {
    let newRow = body.append("tr");
    Object.entries(list).forEach(function ([key, value]) {
      newRow.append("td").text(value);
    });
  });
}
