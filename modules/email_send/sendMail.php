<?php


	$to = $_POST['to'];
	$subject = $_POST['subject'];
	$messsage = $_POST['message'];

	$cmd = "sudo python /var/www/2martlife/modules/email_send/send_mail_3.py " .$to. " " .$subject. " ";
	$cmd .= '' .$_POST['message']. '';

//	echo "$cmd";
//	header('Content-type: text/html; charset=ISO-8859-1');
	$ret = shell_exec($cmd);

	header('Location:'.$_SERVER['HTTP_REFERER']);

//	$ret = shell_exec('ls -al');
?>
