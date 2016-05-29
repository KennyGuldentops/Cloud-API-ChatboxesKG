

<?php

require_once 'app/init.php';

$auth = new TwitterAuth($client);

?>

<?php if($auth->signedIn()): ?>
<?php
	include("public/includes/header.html");


if(isset($_GET['page']) == "shop"){
	include("public/includes/shop.php");
}
else{
	include("public/includes/navigation.html");
	include("public/includes/chathtml.html");
	include("public/includes/instafoto.html");
	include("public/includes/authentication.html");
	include("public/includes/translation.html");
}
include("public/includes/closetag.html");
?>
<?php else: ?>
	<p><a href="<?php echo $auth->getAuthUrl(); ?>">Sign in with Twitter</a></p>
<?php endif; ?>

