function getTravelDestination(name, country, price) {
  return {
    name,
    country,
    price,
  };
}

function getEmptyInput() {
  if (inputName.value.trim() === "") {
    return "You forgot to enter Name";
  } else if (inputCountry.value.trim() === "") {
    return "You forgot to enter Country";
  } else if (inputPrice.value.trim() === "") {
    return "You forgot to enter Price";
  }
}
function getPopUpMessage(message) {
  if (!document.getElementById("alert-div-id")) {
    const alertDiv = document.createElement("div");
    alertDiv.id = "alert-div-id";
    alertDiv.classList.add("alert-div");
    alertDiv.innerText = message;
    titleDiv.appendChild(alertDiv);

    const duration = 2000;
    showAndHideDiv(alertDiv, duration);

    function showAndHideDiv(element, duration) {
      element.style.display = "flex";

      setTimeout(function () {
        element.remove();
      }, duration);
    }
  }
}

// Query Selectors
const inputName = document.getElementById("name");
const inputCountry = document.getElementById("country");
const inputPrice = document.getElementById("price");
const tableDiv = document.getElementById("table-div");
const submitButton = document.getElementById("btn");
const body = document.querySelector("body");
const titleDiv = document.getElementById("title-div");



const table = document.createElement("table");
if (!document.getElementById("table-id")) {
  table.id = "table-id";
  table.classList.add("destination-table");

  const tableHeaderRow = document.createElement("tr");
  tableHeaderRow.classList.add("table-header-row");
  const tableNameHeader = document.createElement("th");
  tableNameHeader.innerText = "Name";
  const tableCountryHeader = document.createElement("th");
  tableCountryHeader.innerText = "Country";
  const tablePriceHeader = document.createElement("th");
  tablePriceHeader.innerText = "Price";

  tableHeaderRow.append(tableNameHeader, tableCountryHeader, tablePriceHeader);
  table.append(tableHeaderRow);
}

// Submit Button
submitButton.addEventListener("click", function makeTable() {
  // Create object
  const destination = getTravelDestination(
    inputName.value,
    inputCountry.value,
    inputPrice.value
  );

  // Add limit to rows created
  const destinationTableRows =
    document.getElementsByClassName("destination-row");
  if (destinationTableRows.length > 8) {
    getPopUpMessage("You can only add up to 7 destinations");
  }
  // Create destination rows
  else {
    if (
      inputName.value.trim() !== "" &&
      inputCountry.value.trim() !== "" &&
      inputPrice.value.trim() !== ""
    ) {
      const destinationTableRow = document.createElement("tr");
      destinationTableRow.className += "destination-row";
      destinationTableRow.classList.add("ligth-row");

      const nameTableData = document.createElement("td");
      nameTableData.innerText = destination.name;

      const countryTableData = document.createElement("td");
      countryTableData.innerText = destination.country;

      const priceTableData = document.createElement("td");
      priceTableData.innerText = destination.price + " $";
      priceTableData.classList.add("priceDataCell");

      const deleteButton = document.createElement("i");
      deleteButton.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";

      deleteButton.addEventListener("click", () => {
        destinationTableRow.remove();
        if (destinationTableRows.length === 0) {
          table.remove();
        }
      });

      destinationTableRow.append(
        nameTableData,
        countryTableData,
        priceTableData
      );
      priceTableData.appendChild(deleteButton);
      table.appendChild(destinationTableRow);
      tableDiv.appendChild(table);
      body.appendChild(tableDiv);
    }
     else {
      getPopUpMessage(getEmptyInput());
    }
  }
});
