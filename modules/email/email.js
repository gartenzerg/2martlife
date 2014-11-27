var keepRefreshing = true;

function refreshMailList() {
	$.ajax({ url: 'modules/email/getMailList.php', success: onReceivedList });
}

function onReceivedList(data) {
	processData(data);
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