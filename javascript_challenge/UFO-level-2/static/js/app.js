// from data.js
var tableData = data;
// use d3 to select the table
var table = d3.select(".table");

// use d3 to select the table body
var body = table.select("tbody");

function init() {
  const cities = tableData.map((row) => row.city);
  const uniqueCities = Array.from(new Set(cities)).sort();

  uniqueCities.forEach((city) => {
    $("#filteredCity").append(
      $("<option>", {
        value: city,
        text: city,
      })
    );
  });

  const states = tableData.map((row) => row.state);
  const uniqueStates = Array.from(new Set(states)).sort();

  uniqueStates.forEach((state) => {
    $("#filteredState").append(
      $("<option>", {
        value: state,
        text: state,
      })
    );
  });

  const shapes = tableData.map((row) => row.shape);
  const uShapes = Array.from(new Set(shapes)).sort();

  uShapes.forEach((shape) => {
    $("#filteredShape").append(
      $("<option>", {
        value: shape,
        text: shape,
      })
    );
  });

  tableData.forEach(function (list) {
    let newRow = body.append("tr");
    Object.entries(list).forEach(function ([key, value]) {
      newRow.append("td").text(value);
    });
  });
}

init();

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

  var inputValue = $("#datetime").val();
  var cityFilter = $("#filteredState").val();

  // Filter by datetime
  var filteredData = tableData;

  filteredData = tableData.filter((x) => x.datetime === inputValue);

  if (cityFilter != "All") {
    filteredData = filteredData.filter((x) => x.city === cityFilter);
  }
  // var cityFilter = d3.select("filteredCity");
  // filteredData = filteredData.map((x) => x.city === cityFilter);

  // filteredData.forEach((dataRow) => {
  //   console.log(dataRow.city);
  //   $("#filteredCity").append(
  //     $("<option>", {
  //       value: dataRow.city,
  //       text: dataRow.city,
  //     })
  //   );
  // });

  // filteredData.forEach((dataRow) => {
  //   $("#filteredShape").append(
  //     $("<option", {
  //       value: dataRow.shape,
  //       text: dataRow.shape,
  //     })
  //   );
  // });

  // filteredData.forEach((dataRow) => {
  //   $("#filteredState").append(
  //     $("<option", {
  //       value: dataRow.state,
  //       text: dataRow.state,
  //     })
  //   );
  // });
  // Clear existing data
  // table.select("tbody").html("");

  // filteredData.forEach(function (list) {
  //   let newRow = body.append("tr");
  //   Object.entries(list).forEach(function ([key, value]) {
  //     newRow.append("td").text(value);
  //   });
  // });

  $("#ufo-table tbody").empty();
  filteredData.forEach(function (list) {
    let newRow = "<tr>";
    Object.entries(list).forEach(function ([key, value]) {
      newRow += `<td>${value}</td>`;
    });
    newRow += "</tr>";
    $("#ufo-table tbody").append(newRow);
  });
}
