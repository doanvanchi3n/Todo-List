const inputBox = document.getElementById("input-box");
const listCotainer = document.getElementById("list-container");
function addTask() {
    if(inputBox.value === '') {
        alert("Hãy viết điều gì đó !")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCotainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}

listCotainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();        
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false)

function saveData(){
    localStorage.getItem("data", listContainer.innerHTML);
}
function showTask() {
    listCotainer.innerHTML = localStorage.getItem("data");
}
showTask();