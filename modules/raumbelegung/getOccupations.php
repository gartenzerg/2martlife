<?php
	header('Content-type: text/html; charset=ISO-8859-1');

	$query = "SELECT `Grund`, `Start`, `Ende` FROM testraum WHERE CAST(Start as DATE) = CAST(NOW() as date) ORDER BY Start ASC;";
	
	$connection = mysql_connect("localhost", "root", "") or die ("Couldn't connect to server!");
	mysql_select_db("raumbelegungen") or die ("Couldn't connect to db!");
	
	$result = mysql_query($query) or die("Error: $abfrage <br>".mysql_error());;
	
	while($row = mysql_fetch_object($result))
	{
		echo "$row->Grund;".date("G:i",strtotime($row->Start)).";".date("G:i",strtotime($row->Ende))."|";	
	}	

?>