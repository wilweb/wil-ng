<?php

	$to      = 'test@test.com';
	$subject = $_POST["subject"];
	$message = $_POST["message"];

	$headers = 'From: ' .$_POST["fromName"]. ' ' . $_POST["fromEmail"];

	mail($to, $subject, $message, $headers);

?>