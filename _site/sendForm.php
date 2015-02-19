<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Send Form</title>
</head>

<?php

// function to validate email addrees in case of malicious spams
function spamcheck($field) {
  // Sanitize e-mail address
  $field=filter_var($field, FILTER_SANITIZE_EMAIL);
  // Validate e-mail address
  if(filter_var($field, FILTER_VALIDATE_EMAIL)) {
    return TRUE;
  } else {
    return FALSE;
  }
}

// sending mail
if(isset($_POST['submit'])) {
		if(isset($_POST['email'])) {
			// check if the email address is valid
			$mailcheck = spamcheck($_POST['email']);
			if($mailcheck == FALSE) {
				echo "Invalid input";
			} else {
				$from = $_POST['email'];
				$subject = "N4S@JAMK Feedback";
				$message = $_POST['message'];
				// message lines should not exceed 70 characters (PHP rule), so wrap it
				$message = wordwrap($message, 70);
				// send mail
				mail("n4sjamk@gmail.com",$subject,"From: $from\n" . $message,"From: $from\n"); 
				// redirect back to page
				header("Location: http://http://n4sjamk.github.io/n4s-info.html");
			}
		}
}


?>

<body>
</body>
</html>