function refreshOccupations() {
	$.ajax({ url: 'modules/raumbelegung/getOccupations.php', success: onReceivedData});
}

function onReceivedData(data) {	
	var htmlString = "";
	var rows = data.split("|");
	for (var  i = 0; i < rows.length; i++) {
		var parts = rows[i].split(";");
		if (parts.length == 3) {
			htmlString += '<div class="verticalItems">\n';
			htmlString += '<div class="horizontalItems reasonPanels">\n' + parts[0] + '\n</div>\n';
			htmlString += '<div class="horizontalItems">\n' + parts[1] + '\n</div>\n';
			htmlString += '<div class="horizontalItems" style="width: 10%;"> - </div>';
			htmlString += '<div class="horizontalItems">\n' + parts[2] + '\n</div>\n';
			htmlString += '</div>\n';
		}
	}
	document.getElementById("mainpanelRaumBelegung").innerHTML = htmlString;
}