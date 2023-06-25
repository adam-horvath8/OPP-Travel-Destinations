const inputName = document.getElementById("name");
const inputCountry = document.getElementById("country");
const inputPrice = document.getElementById("price");
const submitButton = document.getElementById("btn");
const body = document.querySelector("body");

function TravelDestination(name, country, price) {
  return {
    name,
    country,
    price,
  };
}

const table = document.createElement("table");
if (!document.getElementById("table-id")) {
  table.id = "table-id";
  table.classList.add("destination-table");

  const tableHeaderRow = document.createElement("tr");
  const tableNameHeader = document.createElement("th");
  tableNameHeader.innerText = "Name";
  const tableCountryHeader = document.createElement("th");
  tableCountryHeader.innerText = "Country";
  const tablePriceHeader = document.createElement("th");
  tablePriceHeader.innerText = "Price";

  tableHeaderRow.append(tableNameHeader, tableCountryHeader, tablePriceHeader);
  table.append(tableHeaderRow);
}

submitButton.addEventListener("click", function makeTable() {
  const destination = TravelDestination(
    inputName.value,
    inputCountry.value,
    inputPrice.value
  );

  const destinationTableRow = document.createElement("tr");
  const nameTableData = document.createElement("td");
  nameTableData.innerText = destination.name;
  const countryTableData = document.createElement("td");
  countryTableData.innerText = destination.country;
  const priceTableData = document.createElement("td");
  priceTableData.innerText = destination.price;

  destinationTableRow.append(nameTableData, countryTableData, priceTableData);
  table.append(destinationTableRow);

  if (!table.parentElement) {
    body.appendChild(table);
  }
});
