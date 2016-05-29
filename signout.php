<?php

require_once 'app/init.php';

$auth = new TwitterAuth($client);

$auth->signOut();

header('location: index.php');