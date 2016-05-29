<?php require_once('C:\xampp\htdocs\Stripe\config.php'); 

 //Maakt een paysafecard product aan met volgende parameters, het attribuut zorgt er voor dat we meerdere SKU's kunnen toevoegen voor verschillende waardes van de kaart

$paysafecardSKU€5 = \Stripe\SKU::create(array(
	"product" => "prod_8XdTD6eOJjz9SP",
	"attributes" => array(
		"amount" => "€5"
		),
	"price" => 500,
	"currency" => "eur",
	"inventory" => array(
		"type" => "bucket",
		"value" => "in_stock"
		)
	));

$paysafecardSKU€10 = \Stripe\SKU::create(array(
	"product" => "prod_8XdTD6eOJjz9SP",
	"attributes" => array(
		"amount" => "€10"
		),
	"price" => 1000,
	"currency" => "eur",
	"inventory" => array(
		"type" => "bucket",
		"value" => "in_stock"
		)
	));

$paysafecardSKU€25 = \Stripe\SKU::create(array(
	"product" => "prod_8XdTD6eOJjz9SP",
	"attributes" => array(
		"amount" => "€25"
		),
	"price" => 2500,
	"currency" => "eur",
	"inventory" => array(
		"type" => "bucket",
		"value" => "in_stock"
		)
	));

$paysafecardSKU€50 = \Stripe\SKU::create(array(
	"product" => "prod_8XdTD6eOJjz9SP",
	"attributes" => array(
		"amount" => "€50"
		),
	"price" => 5000,
	"currency" => "eur",
	"inventory" => array(
		"type" => "bucket",
		"value" => "in_stock"
		)
	));

$paysafecardSKU€100 = \Stripe\SKU::create(array(
	"product" => "prod_8XdTD6eOJjz9SP",
	"attributes" => array(
		"amount" => "€100"
		),
	"price" => 10000,
	"currency" => "eur",
	"inventory" => array(
		"type" => "bucket",
		"value" => "in_stock"
		)
	));


?>

