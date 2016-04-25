<?php

include("includes/header.html");
include("includes/navbar.html");
include("includes/logins.html");


if($_GET['page'] == "Chat2"){
	include("includes/chatbox2.html");
}
else if($_GET['page'] == "kappa"){
	include("includes/kappa.html");
}
else{
	include("includes/generalchat.html");
}

include("includes/inputs.html");


?>
