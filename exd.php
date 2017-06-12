<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        
		
		if(IsInjected($email))
		{
			$errors .= "\n Bad email value!";
		}

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "dtangram@yahoo.com";

        // Set the email subject.
        $subject = "New contact from $name";

        // Build the email content.
        $email_content = "Name: $name\r\n";
        $email_content = "Email: $email\r\n";
        $email_content = "Message:\n$message\r\n";

        // Build the email headers.
		$email_headers .= "MIME-Version: 1.0\r\n";
		$email_headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
        $email_headers = "From: $name <$email>";
		$email_headers = "Reply-To: $visitor_email \r\n";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
		}

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
	
	// Function to validate against any email injection attempts
	function IsInjected($str)
	{
	  $injections = array('(\n+)',
				  '(\r+)',
				  '(\t+)',
				  '(%0A+)',
				  '(%0D+)',
				  '(%08+)',
				  '(%09+)'
				  );
	  $inject = join('|', $injections);
	  $inject = "/$inject/i";
	  if(preg_match($inject,$str))
		{
		return true;
	  }
	  else
		{
		return false;
	  }
	}
?>