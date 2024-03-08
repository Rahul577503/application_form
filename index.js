document.getElementById("add_row").addEventListener("click", function () {
  var table = document
    .getElementById("education_table")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);
  var cells = [];

  for (var i = 0; i < 6; i++) {
    cells.push(newRow.insertCell(i));
    cells[i].innerHTML =
      '<input type="text" name="' +
      (i < 4
        ? "college_university[]"
        : i == 4
        ? "specialization[]"
        : "percentage[]") +
      '">';
    if (i == 2 || i == 3) {
      cells[i].innerHTML =
        '<input type="month" name="' +
        (i == 2 ? "duration_from[]" : "duration_to[]") +
        '">';
    }
  }
});

fetch("new.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("componentContainer").innerHTML = html;
  })
  .catch((error) => console.error("Error loading component:", error));

  fetch("declearation.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("componentContainer").innerHTML = html;
  })
  .catch((error) => console.error("Error loading component:", error));
