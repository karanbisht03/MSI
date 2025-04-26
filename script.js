const form = document.getElementById('medicineForm');
const tableBody = document.querySelector('#inventoryTable tbody');
let inventory = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const quantity = document.getElementById('quantity').value;
  const expiry = document.getElementById('expiry').value;

  const medicine = { name, quantity, expiry };
  inventory.push(medicine);
  displayInventory();

  form.reset();
});

function displayInventory() {
  tableBody.innerHTML = '';

  inventory.forEach((med, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${med.name}</td>
      <td>${med.quantity}</td>
      <td>${med.expiry}</td>
      <td><button onclick="deleteMedicine(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteMedicine(index) {
  inventory.splice(index, 1);
  displayInventory();
}



document.getElementById("paymentOnlyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const payment = document.getElementById("paymentOnlyOption").value;
  const table = document.getElementById("paymentOnlyTable").querySelector("tbody");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${payment}</td>
    <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
  `;

  table.appendChild(row);
  this.reset();
});


