let elName = document.querySelector("#name");

function login(){

localStorage.setItem("userName",elName.value);
console.log("sapo0");
window.location.href="clients.html";

} 

console.log("sapo1");
// const btnEl = document.querySelector("#test");

// const headEl = document.querySelector("#welName")


window.onload = function() {
    console.log("sapo2");
    const headEl = document.querySelector("#welName");
    const userName = localStorage.getItem("userName");
    if (userName) {
        headEl.innerHTML = ` Welcome ${userName} !`;
        console.log("sapo2.1");
    }
    console.log("sapo3");
};

        


