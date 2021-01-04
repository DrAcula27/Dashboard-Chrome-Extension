/*Name*/
var userName = localStorage.getItem('receivedName');

if (localStorage.getItem('receivedName') == null) {
	userName = "friend";
}

function saveName() {
	localStorage.setItem('receivedName', userName);
}

function changeName() {
	var inputName = document.getElementById("name-input").value;

	if (inputName === "") {
		alert("Please enter your name.");
	} else {
		userName = inputName;
		document.getElementById("name").innerHTML = userName;
	}

	saveName();

	document.getElementById("name-input").value = "";

}

document.getElementById("name-form").addEventListener('submit', function(e) {
	e.preventDefault()
    changeName();
});


function getName() {
	userName = localStorage.getItem('receivedName');
};

getName();

/*Open Settings*/
function openSettings () {
	document.getElementById('settings').classList.toggle("settings-open");
}

document.getElementById("settings-button").addEventListener('click', openSettings);

/*Greeting*/
function getGreeting() {
	var date = new Date();
	var hour = date.getHours();

	if (hour >= 0 && hour < 12) {
		document.getElementById("greeting").innerHTML += `Good morning,`;
	} else if (hour >= 12 && hour < 18) {
		document.getElementById("greeting").innerHTML += `Good afternoon,`;
	} else if (hour >= 18 && hour <= 23) {
		document.getElementById("greeting").innerHTML += `Good evening,`;
	}
}

getGreeting();

function getName() {
	document.getElementById("name").innerHTML = userName;
}

getName();

/*ToDo List*/
function saveState() {
	localStorage.setItem('toDoState', document.getElementById("ul-task-list").innerHTML);
}

document.getElementById("ul-task-list").addEventListener('click', function(e) {
	if (e.target.className == "close") {
		var listItem = e.target.parentElement;
		document.getElementById("ul-task-list").removeChild(listItem);
		saveState();
	} else if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
	}
}, false);

/*Add New List Item*/
function newElement() {
	var inputValue = document.getElementById("myInput").value;

	if (inputValue === "") {
		alert("Give me something to work with! I can't add an empty item to the list.");
	} else {
		document.getElementById("ul-task-list").innerHTML += '<li>' + inputValue 
		+ '<span class="close">×</span></li>';
	}

    document.getElementById("myInput").value = "";

	saveState();

}

document.getElementById("input-and-add-form").addEventListener('submit', function() {
    newElement();
});

/*Retrieve Saved Items in the To Do List*/
let savedToDoList = localStorage.getItem('toDoState');
if (savedToDoList === null) {
	document.getElementById("ul-task-list").innerHTML = `
		<li class="li-task">Add some new to do's<span class="close">×</span></li>
		<li class="li-task">Cross off these old ones<span class="close">×</span></li>
		<li class="li-task">Celebrate your hard work with a nap<span class="close">×</span></li>
	`
} else {
	document.getElementById("ul-task-list").innerHTML = localStorage.getItem('toDoState');
}