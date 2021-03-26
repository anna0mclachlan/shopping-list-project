var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btn = document.createElement("button");
var list = document.querySelectorAll("li")

function inputLength() {
	return input.value.length;
}

function addDeleteIcon(){
	var deleteIcon = document.createElement("button")
	deleteIcon.className = "deleteIcon"
	return deleteIcon
}

function createListElement() {
	var li = document.createElement("li");
	// btn.classList.add("delete");
	// btn.innerHTML = "Delete";
	li.setAttribute("id", (list.length));
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Toggle strikethrough on click//
function strikeThroughAfterClick(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
}
}

function deleteElementAfterClick(event) {
	var target = event.target
	var parent = target.parentNode
	if (target.className === "removeItem") {
		parent.parentNode.removeChild(parent)
	}
}

ul.addEventListener("click", deleteElementAfterClick)

ul.addEventListener("click", strikeThroughAfterClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);