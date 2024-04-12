let elName = document.querySelector("#name");

function login(){

localStorage.setItem("userName",elName.value);

window.location.href="clients.html";

} 

// const btnEl = document.querySelector("#test");

// const headEl = document.querySelector("#welName")


window.onload = function() {
   
    const headEl = document.querySelector("#welName");
    const userName = localStorage.getItem("userName");
    if (userName) {
        headEl.innerHTML = ` Welcome ${userName} !`;
        
    }
   
};

        


