<?php

	$cmd = "sudo python /var/www/2martlife/modules/email_receive/get_mails.py";

	shell_exec($cmd);

	header('Content-type: text/html; charset=UTF-8');


	$file = file_get_contents("newmails.txt");
	echo $file;
?>
