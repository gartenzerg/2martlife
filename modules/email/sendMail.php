<?php

	$to = $_POST['to'];
	$subject = $_POST['subject'];
	$messsage = $_POST['message'];

echo "<pre>\n";
print_r($_POST);
echo "</pre>\n";

	$cmd = "sudo python /var/www/2martlife/modules/email/send_mail_3.py " .$to. " " .$subject. " ";
	$cmd .= '' .$_POST['message']. '';

//	echo "$cmd";
//	header('Content-type: text/html; charset=ISO-8859-1');
	$ret = shell_exec($cmd);

//	$ret = shell_exec('ls -al');
	echo "$ret";
?>
