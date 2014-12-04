var rawData;
var timer;

function stop() {
	window.clearTimeout(timer);
}

function refreshList() {
	$.ajax({ url: 'modules/todolist/getList.php', success: onReceivedList });
}

function onReceivedList(data) {	
	if (data != rawData) {
		processData(data);
	}
	rawData = data;
	timer = setTimeout(refreshList, 5000);	
}

function processData(data) {
	var i;
	var panel = document.getElementById("listPanel");
	var content = data.split("\n");
	
	panel.innerHTML = "<ul>\n";		
		
	for (i = 0; i < content.length; i++) {
		if (content[i] != "") {
			panel.innerHTML = panel.innerHTML + "<li>" + content[i] + "</li>\n";
		}
	}
	panel.innerHTML = panel.innerHTML + "</ul>\n";
}
