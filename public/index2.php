<!DOCTYPE html>
<html>
<head>
  <title>Stripe</title>
</head>
<body>

<form action="" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_6oiApxpS2DQQAABQ9rHtDR1H"
    data-amount="10000"
    data-name="Chatbox KG"
    data-description="Paysafecard €100"
    data-locale="auto"
    data-currency="eur"
    data-label="But now">
  </script>
</form>



<?php require_once('./config.php'); 



$token = $_POST['stripeToken'];

try {
  $order = \Stripe\Order::create(array(
  "items" => array(
    array(
      "type" => "sku",
      "parent" => "sku_8XdUFSGtB1a4ZW"
    )
  ),
  "currency" => "eur",
  "email" => "stripeEmail"
));

  $order->pay(array(
  "source" => "$token" // obtained with Stripe.js
));

} catch(\Stripe\Error\Card $e) {
  // The card has been declined
}




?>



</body>
</html>



