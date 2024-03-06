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

    n++;
    x++;
    ids++;
    console.log("enter here2")
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

