// from data.js
var tableData = data;
console.log(tableData);
// use d3 to select the table
var table = d3.select(".table");

// use d3 to select the table body
var body = table.select("tbody");

tableData.forEach(function (list) {
  let newRow = body.append("tr");
  Object.entries(list).forEach(function ([key, value]) {
    newRow.append("td").text(value);
  });
});
