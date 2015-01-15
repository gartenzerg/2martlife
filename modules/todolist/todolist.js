var rawData;
var timer;

function startToDoList() {
	rawData="";
	refreshList();
}

function stop() {
	window.clearTimeout(timer);
}

function refreshList() {
	$.ajax({ url: 'modules/todolist/getList.php', success: onReceivedList });
}

function onReceivedList(data) {	
	if (data != rawData) {
		processDataTodoList(data);
	}
	rawData = data;
	timer = setTimeout(refreshList, 5000);	
}

function processDataTodoList(data) {
	var i;
	var panel = document.getElementById("listPanelTodoList");
	var content = data.split("\n");
	
	panel.innerHTML = "<ul>\n";		
		
	for (i = 0; i < content.length; i++) {
		if (content[i] != "") {
			panel.innerHTML = panel.innerHTML + "<li>" + content[i] + "</li>\n";
		}
	}
	panel.innerHTML = panel.innerHTML + "</ul>\n";
}
