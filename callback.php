<?php

require_once 'app/init.php';

$auth = new TwitterAuth($client);

if($auth->signIn())
{
	header('Location: index.php');
}
else
{
	die('Sign in failed');
}