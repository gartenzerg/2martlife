<?php
	header('Content-type: text/html; charset=ISO-8859-1');
	$file = file_get_contents("list.txt");
	echo $file;
?>