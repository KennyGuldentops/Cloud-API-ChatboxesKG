<?php require_once('C:\xampp\htdocs\Stripe\config.php'); 

 //Maakt een paysafecard product aan met volgende parameters, het attribuut zorgt er voor dat we meerdere SKU's kunnen toevoegen voor verschillende waardes van de kaart
 $PaysafecardProduct = \Stripe\Product::create(array(
  "name" => 'Paysafecard',
  "description" => "Paysafecard",
  "attributes" => ["amount"],
  "caption" => "Paysafecard",
  "images" => ["https://www.wkv.com/img/wkv/paysafecard.png"]
  ));

?>

