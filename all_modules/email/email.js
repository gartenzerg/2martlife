var timer;
var rawData;

function refreshMailList() {
	$.ajax({ url: 'modules/email/getMailList.php', success: onReceivedList });
}

function stop() {
	window.clearTimeout(timer);
}

function onReceivedList(data) {	
	if (data != rawData) {
		processData(data);
	}
	rawData = data;
	timer = setTimeout(refreshMailList, 5000);		
}

function processData(data) {
	var i;
	var panel = document.getElementById("mailListPanel");
	if (panel != null) {
		var content = data.split("\n");
	
		panel.innerHTML = "<ul>\n";		
			
		for (i = 0; i < content.length; i++) {
			if (content[i] != "") {
				panel.innerHTML = panel.innerHTML + "<li>" + content[i] + "</li>\n";
			}
		}
		panel.innerHTML = panel.innerHTML + "</ul>\n";	
	}	
} 