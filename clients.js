let list1 = []
let list2 = []
let list3 = []
let list4 = []

let n= 1;
let x =0;
let ids = 0;
const now = moment(); // Get the current date and time
const formattedDate = now.format('ll');

function addRow(){
    
    let addRown = document.getElementById("show")
    let newRow = addRown.insertRow(n);
    list1[x] = ids;
    list2[x] = document.getElementById('cliente').value
    list3[x] = document.getElementById('amount').value
    list4[x] = formattedDate
    
    let cel1 = newRow.insertCell(0)
    let cel2 = newRow.insertCell(1);
	let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3)

    cel1.innerHTML = list1[x];
	cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    saveToLocalStorage();
    n++;
    x++;
    ids++;
    console.log("enter here2")
}

function saveToLocalStorage() {
  localStorage.setItem('list1', JSON.stringify(list1));
  localStorage.setItem('list2', JSON.stringify(list2));
  localStorage.setItem('list3', JSON.stringify(list3));
  localStorage.setItem('list4', JSON.stringify(list4));
}

function loadFromLocalStorage() {
  list1 = JSON.parse(localStorage.getItem('list1')) || []; //it retrieves what is stored in local storage or gets an empty array
  list2 = JSON.parse(localStorage.getItem('list2')) || [];
  list3 = JSON.parse(localStorage.getItem('list3')) || [];
  list4 = JSON.parse(localStorage.getItem('list4')) || [];
  console.log("entered here");
  let table = document.getElementById('show');
  //table.innerHTML = ''; // Clear existing table rows
  
  for (let i = 0; i < list1.length; i++) {
    let newRow = table.insertRow(i + 1); // Add 1 to account for table header row
    
    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3);
    
    cel1.innerHTML = list1[i];
    cel2.innerHTML = list2[i];
    cel3.innerHTML = list3[i];
    cel4.innerHTML = list4[i];
  }
}
window.onload = loadFromLocalStorage();


function openAddForm() {
  document.getElementById("addClientForm").style.display = "block";
  document.getElementById("removeClientForm").style.display = "none";

}
function openRemoveForm() {
  document.getElementById("addClientForm").style.display = "none";
  document.getElementById("removeClientForm").style.display = "block";
}

function closeForm() {
  document.getElementById("addClientForm").style.display = "none";
  document.getElementById("removeClientForm").style.display = "none";
}

function removeRow(idToRemove){
  let table = document.getElementById("show");
 // document.getElementById("show").deleteRow(ids);
 for(let i =0; i < list1.length; i++){
  console.log(list1[i]);
  if(list1[i] == idToRemove){
            table.deleteRow(i + 1); // Adjust index to account for table header row
            list1.splice(i, 1);
            list2.splice(i, 1);
            list3.splice(i, 1);
            list4.splice(i, 1);
            n--;
            x--;
            ids--;
            break;
  }
 }
}

function update(){
  var table = document.getElementById("show")
var sumval =0;


for(let i = 1; i < table.rows.length; i++){

  sumval = sumval + parseInt(table.rows[i].cells[2].innerHTML);
  
}
document.getElementById("totalClient").innerHTML = table.rows.length-1;
document.getElementById("totalMoney").innerHTML = sumval;

}





