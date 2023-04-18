const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");
function addItems() {
    if (inputText.value === "") {
        alert("please enter some text");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Delete";
        li.appendChild(span);
    }
    inputText.value = "";
    saveData();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function displayList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
displayList();