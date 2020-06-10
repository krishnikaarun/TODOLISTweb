var len = 0;
var len2 = 0;
var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete");
var completedTasksHolder = document.getElementById("completed");

var createNewTaskElement = function (taskString) {
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var label = document.createElement("label");
	var deleteButton = document.createElement("button");
	label.innerText = taskString;
	checkBox.type = "checkbox";
	deleteButton.innerText = "X";
	deleteButton.className = "delete";
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(deleteButton);
	len++;
	displaycount();
	return listItem;
}

var addTask = function () {
	var listItem = createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var deleteTask = function () {
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
	len--;
	displaycount();	
	displaycount2();
}

var taskCompleted = function () {
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
	displaycount2();

}


var taskIncomplete = function () {
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}



var ajaxRequest = function () {
	console.log("AJAX Request");
}

addButton.addEventListener("click", addTask);


var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var deleteButton = taskListItem.querySelector("button.delete");
	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;
}

var displaycount = function () {

	document.getElementById("totcount1").innerHTML = len;
}

var displaycount2 = function () {

	len2 = document.querySelectorAll('input[type="checkbox"]:checked').length
	document.getElementById("top1").innerHTML = len2;
}