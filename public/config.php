<?php
require_once('C:\xampp\htdocs\Cloudapi\vendor\autoload.php');

$stripe = array(
  "secret_key"      => "sk_test_AnkSIrLlXdVLRLfyVeEPT8Xr",
  "publishable_key" => "pk_test_6oiApxpS2DQQAABQ9rHtDR1H"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>