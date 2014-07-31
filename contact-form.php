<?php
  echo "<html>";
  echo "<head>";
  echo "<title>Contact-form</title>";
  echo "</head>";
  echo "<body>";

  $name  = $_POST['name'];
  $email    = $_POST['email'];
  $title = $_POST['title'];
  $message  = $_POST['message'];


  if ( isset($name) & isset($email) & isset($title) & isset($message)) {
    $to       = "sutinen.henri@gmail.com";
    $subject  = "Message from website";
    $body  = ": ".$name."\n ".$email."\n ".$title."\n ".$message."\n ";

if ($_POST['submit']) {
 mail($to, $subject, $body);

    echo "<p>SUCCESS!</p>";
  } else {
    echo "<p>FALE!!</p>";
  }
  }
  echo "</body>";
  echo "</html>";
  
  ?>