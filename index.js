var moduleCount = 0;

function bodyLoad() {
	updateWatch();
	loadModules();	
}		

function bodyResize() {
	setIconsWidth(moduleCount);
}
			
function onReceivedModules(data) {
	var modules = data.toString().split(",");	
	moduleCount = modules.length
	setIconsRowWidth(moduleCount);
	
	for (var i = 0; i < modules.length; i++) {
		var module = modules[i];
		var moduleIcon = "modules/" + module + "/" + module + ".png";
		document.getElementById("iconsRow").innerHTML += "<img src=\"" + moduleIcon + "\" onclick=\"onModuleClick('" + module + "')\" alt=\"" + module + "\" class=\"picsIcons\"></img>";		
		if (i < modules.length - 1) {
			document.getElementById("iconsRow").innerHTML += "<div style=\"width: 10px; height:100%; float: left;\"></div>"
		}							
	}											
}
			
function loadModules() {
	$.ajax({ url: 'php/getmodules.php', success: onReceivedModules });				
}						
					
function onModuleClick(module) {
	stop();
	$("#contentPanel").load("modules/" + module + "/" + module + ".htm");
}
						
function updateWatch() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
				
	var hours = addZero(hours);
	var minutes = addZero(minutes);
				
	var hours1 = hours.substring(0,1);	
	var hours2 = hours.substring(1,2);				
	var minutes1 = minutes.substring(0,1);
	var minutes2 = minutes.substring(1,2);

	document["imgHour1"].src = "images/numbers/digitalwhite/" + hours1 + ".png";	
	document["imgHour2"].src = "images/numbers/digitalwhite/" + hours2 + ".png";
	document["imgMinutes1"].src = "images/numbers/digitalwhite/" + minutes1 + ".png";
	document["imgMinutes2"].src = "images/numbers/digitalwhite/" + minutes2 + ".png";	
		
	var t = setTimeout(function(){updateWatch()},1000);	
}
			
function addZero(i) {
	if (i < 10) {
		i= "0" + i;
	}				
	return "" + i;
}

function setIconsRowWidth(iconsCount) {
	var widthIcon = (($("#iconsRow").height() + 10) * iconsCount) - 4;	
	$("#iconsRow").css("width", "" + widthIcon);
}





