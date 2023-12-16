

let selectedItems = [];

  function addItem(itemName, itemPrice) {
    let existingItem = selectedItems.find(item => item.name === itemName);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      selectedItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    updateBillTable();
  }

  function removeItem(itemName) {
    let existingItem = selectedItems.find(item => item.name === itemName);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        selectedItems = selectedItems.filter(item => item.name !== itemName);
      }
    }

    updateBillTable();
  }

  function addOneItem(itemName, itemPrice) {
    let existingItem = selectedItems.find(item => item.name === itemName);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      selectedItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    updateBillTable();
  }

  function deleteAllItems() {
    selectedItems = [];
    updateBillTable();
  }

  function updateBillTable() {
    let tableBody = document.getElementById("billTableBody");
    let totalAmount = 0;

    // Clear previous rows
    tableBody.innerHTML = "";

    // Update table with selected items
    selectedItems.forEach(item => {
      let row = tableBody.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);

      cell1.innerHTML = item.name;
      cell2.innerHTML = item.quantity;
      cell3.innerHTML = "₹ " + (item.price * item.quantity).toFixed(2);
      cell4.innerHTML = `
        <button class="btn btn-warning btn-sm action-btn11" onclick="removeItem('${item.name}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg></button>
        <button class="btn btn-danger btn-sm action-btn11" onclick="deleteItem('${item.name}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></button>
        <button class="btn btn-success btn-sm action-btn11" onclick="addOneItem('${item.name}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
      `;

      totalAmount += item.price * item.quantity;
    });

    // Update total amount
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
  }

  function deleteItem(itemName) {
    selectedItems = selectedItems.filter(item => item.name !== itemName);
    updateBillTable();
  }

  function printBill() {
    // Implement printing logic (e.g., open a new window, display a modal, etc.)
    window.print()
  }











  let selectedItems1 = [];

function addItem1(itemName1, itemPrice1) {
  let existingItem1 = selectedItems1.find(item => item.name1 === itemName1);

  if (existingItem1) {
    existingItem1.quantity1 += 1;
  } else {
    selectedItems1.push({ name1: itemName1, price1: itemPrice1, quantity1: 1 });
  }

  updateBillTable1();
}

function removeItem1(itemName1) {
  let existingItem1 = selectedItems1.find(item => item.name1 === itemName1);

  if (existingItem1) {
    if (existingItem1.quantity1 > 1) {
      existingItem1.quantity1 -= 1;
    } else {
      selectedItems1 = selectedItems1.filter(item => item.name1 !== itemName1);
    }
  }

  updateBillTable1();
}

function addOneItem1(itemName1, itemPrice1) {
  let existingItem1 = selectedItems1.find(item => item.name1 === itemName1);

  if (existingItem1) {
    existingItem1.quantity1 += 1;
  } else {
    selectedItems1.push({ name1: itemName1, price1: itemPrice1, quantity1: 1 });
  }

  updateBillTable1();
}

function deleteAllItems1() {
  selectedItems1 = [];
  updateBillTable1();
}

function updateBillTable1() {
  let tableBody1 = document.getElementById("billTableBody1");
  let totalAmount1 = 0;

  // Clear previous rows
  tableBody1.innerHTML = "";

  // Update table with selected items
  selectedItems1.forEach(item1 => {
    let row1 = tableBody1.insertRow();
    let cell11 = row1.insertCell(0);
    let cell21 = row1.insertCell(1);
    let cell31 = row1.insertCell(2);
    let cell41 = row1.insertCell(3);

    cell11.innerHTML = item1.name1;
    cell21.innerHTML = item1.quantity1;
    cell31.innerHTML = "₹ " + (item1.price1 * item1.quantity1).toFixed(2);
    cell41.innerHTML = `
      <button class="btn btn-warning btn-sm action-btn11" onclick="removeItem1('${item1.name1}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg></button>
        <button class="btn btn-danger btn-sm action-btn11" onclick="deleteItem1('${item1.name1}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></button>
        <button class="btn btn-success btn-sm action-btn11" onclick="addOneItem1('${item1.name1}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
    `;

    totalAmount1 += item1.price1 * item1.quantity1;
  });

  // Update total amount
  document.getElementById("totalAmount1").innerText = totalAmount1.toFixed(2);
}

function deleteItem1(itemName1) {
  selectedItems1 = selectedItems1.filter(item1 => item1.name1 !== itemName1);
  updateBillTable1();
}

function printBill1() {
  // Implement printing logic (e.g., open a new window, display a modal, etc.)
  window.print()
}







let selectedItems2 = [];

function tableNo2() {
  document.getElementById('table2').style.display = 'block';
  document.getElementById('table1').style.display = 'none';
}

function tableNo2() {
  document.getElementById('table2').style.display = 'block';
  document.getElementById('table1').style.display = 'none';
}

function addItem2(itemName2, itemPrice2) {
  let existingItem2 = selectedItems2.find(item => item.name2 === itemName2);

  if (existingItem2) {
    existingItem2.quantity2 += 1;
  } else {
    selectedItems2.push({ name2: itemName2, price2: itemPrice2, quantity2: 1 });
  }

  updateBillTable2();
}

function removeItem2(itemName2) {
  let existingItem2 = selectedItems2.find(item => item.name2 === itemName2);

  if (existingItem2) {
    if (existingItem2.quantity2 > 1) {
      existingItem2.quantity2 -= 1;
    } else {
      selectedItems2 = selectedItems2.filter(item => item.name2 !== itemName2);
    }
  }

  updateBillTable2();
}

function addOneItem2(itemName2, itemPrice2) {
  let existingItem2 = selectedItems2.find(item => item.name2 === itemName2);

  if (existingItem2) {
    existingItem2.quantity2 += 1;
  } else {
    selectedItems2.push({ name2: itemName2, price2: itemPrice2, quantity2: 1 });
  }

  updateBillTable2();
}

function deleteAllItems2() {
  selectedItems2 = [];
  updateBillTable2();
}

function updateBillTable2() {
  let tableBody2 = document.getElementById("billTableBody2");
  let totalAmount2 = 0;

  // Clear previous rows
  tableBody2.innerHTML = "";

  // Update table with selected items
  selectedItems2.forEach(item2 => {
    let row2 = tableBody2.insertRow();
    let cell12 = row2.insertCell(0);
    let cell22 = row2.insertCell(1);
    let cell32 = row2.insertCell(2);
    let cell42 = row2.insertCell(3);

    cell12.innerHTML = item2.name2;
    cell22.innerHTML = item2.quantity2;
    cell32.innerHTML = "₹ " + (item2.price2 * item2.quantity2).toFixed(2);
    cell42.innerHTML = `
      <button class="btn btn-warning btn-sm action-btn11" onclick="removeItem2('${item2.name2}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg></button>
        <button class="btn btn-danger btn-sm action-btn11" onclick="deleteItem2('${item2.name2}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></button>
        <button class="btn btn-success btn-sm action-btn11" onclick="addOneItem2('${item2.name2}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
    `;

    totalAmount2 += item2.price2 * item2.quantity2;
  });

  // Update total amount
  document.getElementById("totalAmount2").innerText = totalAmount2.toFixed(2);
}

function deleteItem2(itemName2) {
  selectedItems2 = selectedItems2.filter(item2 => item2.name2 !== itemName2);
  updateBillTable2();
}

function printBill2() {
  // Implement printing logic (e.g., open a new window, display a modal, etc.)
  window.print()
}





let selectedItems3 = [];

function tableNo3() {
  document.getElementById('table3').style.display = 'block';
  document.getElementById('table2').style.display = 'none';
}

function tableNo3() {
  document.getElementById('table3').style.display = 'block';
  document.getElementById('table2').style.display = 'none';
}

function addItem3(itemName3, itemPrice3) {
  let existingItem3 = selectedItems3.find(item => item.name3 === itemName3);

  if (existingItem3) {
    existingItem3.quantity3 += 1;
  } else {
    selectedItems3.push({ name3: itemName3, price3: itemPrice3, quantity3: 1 });
  }

  updateBillTable3();
}

function removeItem3(itemName3) {
  let existingItem3 = selectedItems3.find(item => item.name3 === itemName3);

  if (existingItem3) {
    if (existingItem3.quantity3 > 1) {
      existingItem3.quantity3 -= 1;
    } else {
      selectedItems3 = selectedItems3.filter(item => item.name3 !== itemName3);
    }
  }

  updateBillTable3();
}

function addOneItem3(itemName3, itemPrice3) {
  let existingItem3 = selectedItems3.find(item => item.name3 === itemName3);

  if (existingItem3) {
    existingItem3.quantity3 += 1;
  } else {
    selectedItems3.push({ name3: itemName3, price3: itemPrice3, quantity3: 1 });
  }

  updateBillTable3();
}

function deleteAllItems3() {
  selectedItems3 = [];
  updateBillTable3();
}

function updateBillTable3() {
  let tableBody3 = document.getElementById("billTableBody3");
  let totalAmount3 = 0;

  // Clear previous rows
  tableBody3.innerHTML = "";

  // Update table with selected items
  selectedItems3.forEach(item3 => {
    let row3 = tableBody3.insertRow();
    let cell13 = row3.insertCell(0);
    let cell23 = row3.insertCell(1);
    let cell33 = row3.insertCell(2);
    let cell43 = row3.insertCell(3);

    cell13.innerHTML = item3.name3;
    cell23.innerHTML = item3.quantity3;
    cell33.innerHTML = "₹ " + (item3.price3 * item3.quantity3).toFixed(2);
    cell43.innerHTML = `
      <button class="btn btn-warning btn-sm action-btn11" onclick="removeItem3('${item3.name3}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg></button>
        <button class="btn btn-danger btn-sm action-btn11" onclick="deleteItem3('${item3.name3}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></button>
        <button class="btn btn-success btn-sm action-btn11" onclick="addOneItem3('${item3.name3}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
    `;

    totalAmount3 += item3.price3 * item3.quantity3;
  });

  // Update total amount
  document.getElementById("totalAmount3").innerText = totalAmount3.toFixed(2);
}

function deleteItem3(itemName3) {
  selectedItems3 = selectedItems3.filter(item3 => item3.name3 !== itemName3);
  updateBillTable3();
}

function printBill3() {
  // Implement printing logic (e.g., open a new window, display a modal, etc.)
  window.print()
}





let selectedItems4 = [];

function tableNo4() {
  document.getElementById('table4').style.display = 'block';
  document.getElementById('table3').style.display = 'none';
}

function tableNo4() {
  document.getElementById('table4').style.display = 'block';
  document.getElementById('table3').style.display = 'none';
}

function addItem4(itemName4, itemPrice4) {
  let existingItem4 = selectedItems4.find(item => item.name4 === itemName4);

  if (existingItem4) {
    existingItem4.quantity4 += 1;
  } else {
    selectedItems4.push({ name4: itemName4, price4: itemPrice4, quantity4: 1 });
  }

  updateBillTable4();
}

function removeItem4(itemName4) {
  let existingItem4 = selectedItems4.find(item => item.name4 === itemName4);

  if (existingItem4) {
    if (existingItem4.quantity4 > 1) {
      existingItem4.quantity4 -= 1;
    } else {
      selectedItems4 = selectedItems4.filter(item => item.name4 !== itemName4);
    }
  }

  updateBillTable4();
}

function addOneItem4(itemName4, itemPrice4) {
  let existingItem4 = selectedItems4.find(item => item.name4 === itemName4);

  if (existingItem4) {
    existingItem4.quantity4 += 1;
  } else {
    selectedItems4.push({ name4: itemName4, price4: itemPrice4, quantity4: 1 });
  }

  updateBillTable4();
}

function deleteAllItems4() {
  selectedItems4 = [];
  updateBillTable4();
}

function updateBillTable4() {
  let tableBody4 = document.getElementById("billTableBody4");
  let totalAmount4 = 0;

  // Clear previous rows
  tableBody4.innerHTML = "";

  // Update table with selected items
  selectedItems4.forEach(item4 => {
    let row4 = tableBody4.insertRow();
    let cell14 = row4.insertCell(0);
    let cell24 = row4.insertCell(1);
    let cell34 = row4.insertCell(2);
    let cell44 = row4.insertCell(3);

    cell14.innerHTML = item4.name4;
    cell24.innerHTML = item4.quantity4;
    cell34.innerHTML = "₹ " + (item4.price4 * item4.quantity4).toFixed(2);
    cell44.innerHTML = `
      <button class="btn btn-warning btn-sm action-btn11" onclick="removeItem4('${item4.name4}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg></button>
        <button class="btn btn-danger btn-sm action-btn11" onclick="deleteItem4('${item4.name4}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></button>
        <button class="btn btn-success btn-sm action-btn11" onclick="addOneItem4('${item4.name4}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
    `;

    totalAmount4 += item4.price4 * item4.quantity4;
  });

  // Update total amount
  document.getElementById("totalAmount4").innerText = totalAmount4.toFixed(2);
}

function deleteItem4(itemName4) {
  selectedItems4 = selectedItems4.filter(item4 => item4.name4 !== itemName4);
  updateBillTable4();
}

function printBill4() {
  // Implement printing logic (e.g., open a new window, display a modal, etc.)
  window.print()
}






let selectedItems5 = [];

function tableNo5() {
  document.getElementById('table5').style.display = 'block';
  document.getElementById('table4').style.display = 'none';
}

function tableNo5() {
  document.getElementById('table5').style.display = 'block';
  document.getElementById('table4').style.display = 'none';
}

function addItem5(itemName5, itemPrice5) {
  let existingItem5 = selectedItems5.find(item => item.name5 === itemName5);

  if (existingItem5) {
    existingItem5.quantity5 += 1;
  } else {
    selectedItems5.push({ name5: itemName5, price5: itemPrice5, quantity5: 1 });
  }

  updateBillTable5();
}

function removeItem5(itemName5) {
  let existingItem5 = selectedItems5.find(item => item.name5 === itemName5);

  if (existingItem5) {
    if (existingItem5.quantity5 > 1) {
      existingItem5.quantity5 -= 1;
    } else {
      selectedItems5 = selectedItems5.filter(item => item.name5 !== itemName5);
    }
  }

  updateBillTable5();
}

function addOneItem5(itemName5, itemPrice5) {
  let existingItem5 = selectedItems5.find(item => item.name5 === itemName5);

  if (existingItem5) {
    existingItem5.quantity5 += 1;
  } else {
    selectedItems5.push({ name5: itemName5, price5: itemPrice5, quantity5: 1 });
  }

  updateBillTable5();
}

function deleteAllItems5() {
  selectedItems5 = [];
  updateBillTable5();
}

function updateBillTable5() {
  let tableBody5 = document.getElementById("billTableBody5");
  let totalAmount5 = 0;

  // Clear previous rows
  tableBody5.innerHTML = "";

  // Update table with selected items
  selectedItems5.forEach(item5 => {
    let row5 = tableBody5.insertRow();
    let cell15 = row5.insertCell(0);
    let cell25 = row5.insertCell(1);
    let cell35 = row5.insertCell(2);
    let cell45 = row5.insertCell(3);

    cell15.innerHTML = item5.name5;
    cell25.innerHTML = item5.quantity5;
    cell35.innerHTML = "₹ " + (item5.price5 * item5.quantity5).toFixed(2);
    cell45.innerHTML = `
      <button class="btn btn-warning btn-sm action-btn11" onclick="removeItem5('${item5.name5}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg></button>
        <button class="btn btn-danger btn-sm action-btn11" onclick="deleteItem5('${item5.name5}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></button>
        <button class="btn btn-success btn-sm action-btn11" onclick="addOneItem5('${item5.name5}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
    `;

    totalAmount5 += item5.price5 * item5.quantity5;
  });

  // Update total amount
  document.getElementById("totalAmount5").innerText = totalAmount5.toFixed(2);
}

function deleteItem5(itemName5) {
  selectedItems5 = selectedItems5.filter(item5 => item5.name5 !== itemName5);
  updateBillTable5();
}

function printBill5() {
  // Implement printing logic (e.g., open a new window, display a modal, etc.)
  window.print()
}













// Get Date and Time

document.addEventListener('DOMContentLoaded', function () {
      // Function to update live time every second
      function updateLiveTime() {
        var currentDate = new Date();
        var hours = currentDate.getHours() % 12 || 12; // Convert to 12-hour format
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        var ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';

        // Display live time
        var liveTimeElement = document.getElementById('liveTime');
        liveTimeElement.innerHTML = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ' ' + ampm;
      }

      // Initial update
      updateLiveTime();

      // Update live time every second
      setInterval(updateLiveTime, 1000);

      // Get current date
      var currentDate = new Date();

      // Days of the week
      var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      // Get day, date
      var day = daysOfWeek[currentDate.getDay()];
      var date = currentDate.getDate();
      var month = currentDate.toLocaleString('default', { month: 'long' });
      var year = currentDate.getFullYear();

      // Display day and date in specified format
      var dayDateElement = document.getElementById('dayDate');
      dayDateElement.innerHTML = day + ', ' + date + ' ' + month + ' ' + year;
    });



// loder js


window.onload = function () {
    // Page has fully loaded, hide the loader
    hideLoader();
};

function hideLoader() {
    var loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
}
