<?php

session_start();

require_once 'C:\xampp\htdocs\Cloudapi\vendor/autoload.php';
require_once 'app/classes/TwitterAuth.php';

\Codebird\Codebird::setConsumerKey('u7G4ZV8vZx0cM3SjI2gouYztm', 'tXAH7iliozuU9eCwt9CjDLo4hb6jT8offg5lARiv2FSy3IG42a');
$client = \Codebird\Codebird::getInstance();



?>