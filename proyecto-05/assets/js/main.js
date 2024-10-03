let tableContainer = document.querySelector(".tables");

for (let i = 1; i <= 10; i++) {
  let table = document.createElement("table");
  let caption = document.createElement("caption");
  caption.textContent = `Tabla del ${i}`;
  table.appendChild(caption);

  for (let j = 1; j <= 10; j++) {
    let row = document.createElement("tr");
    let data = document.createElement("td");
    data.textContent = `${i} x ${j} = ${i * j}`;
    row.appendChild(data);
    table.appendChild(row);
  }

  tableContainer.appendChild(table);
}
