
  <body>


<!-- navigatie-->
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <img alt='brand' src="public/includes/logo.png" style="width:30px;height:30px;margin-top:10px;"">
    </div>

      <ul class="nav navbar-nav navbar-left">
        <p class="navbar-text" id="SignedInAs">Shop</p>
        <p class="navbar-text" id="SignedInAs">Signed out</p>
      </ul>

      <!-- Link naar shop -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="index.php">Home</a></li>
        <li><a href="#" id="Logout">Log out</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Script vor het switchen tussen list en grid view-->
<script type="text/javascript">
  $(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});
</script>

<!-- Shop Items -->


<div class="container">
    <div class="well well-sm">
        <strong>Category Title</strong>
        <div class="btn-group">
            <a href="#" id="list" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-th-list">
            </span>List</a> <a href="#" id="grid" class="btn btn-default btn-sm"><span
                class="glyphicon glyphicon-th"></span>Grid</a>
        </div>
    </div>
    <div id="products" class="row list-group">
        <div class="item  col-xs-4 col-lg-4">
            <div class="thumbnail">
                <img class="group list-group-image" src="https://dedipass.com/images/paysafecard.png" alt="" />
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        Paysafecard</h4>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <p class="lead">
                                €5</p>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
        <div class="item  col-xs-4 col-lg-4">
            <div class="thumbnail">
                <img class="group list-group-image" src="https://dedipass.com/images/paysafecard.png" alt="" />
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        Paysafecard</h4>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <p class="lead">
                                €10</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="item  col-xs-4 col-lg-4">
            <div class="thumbnail">
                <img class="group list-group-image" src="https://dedipass.com/images/paysafecard.png" alt="" />
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        Paysafecard</h4>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <p class="lead">
                                €25</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="item  col-xs-4 col-lg-4">
            <div class="thumbnail">
                <img class="group list-group-image" src="https://dedipass.com/images/paysafecard.png" alt="" />
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        Paysafecard</h4>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <p class="lead">
                                €50</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <div class="item  col-xs-4 col-lg-4">
            <div class="thumbnail">
                <img class="group list-group-image" src="https://dedipass.com/images/paysafecard.png" alt="" />
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        Paysafecard</h4>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <p class="lead">
                                €100</p>
                        </div>
                        <form action="" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_6oiApxpS2DQQAABQ9rHtDR1H"
    data-amount="10000"
    data-name="Chatbox KG"
    data-description="Paysafecard €100"
    data-locale="auto"
    data-currency="eur">
  </script>
</form>
<?php require_once('C:\xampp\htdocs\Stripe\config.php'); 
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
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</div>



