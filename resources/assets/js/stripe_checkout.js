let mix = require('laravel-mix');
var StripEnv = `${process.env.MIX_STRIPE_KEY}`;
var stripe = Stripe(StripEnv);
var elements = stripe.elements();
var cardElement = elements.create('card');
cardElement.mount('#card-element');

var btn = document.getElementById("complete-order");
btn.onclick = function () {
    createToken();
};

function createToken() {
    document.getElementById("complete-order").disabled = true;
    let options = { 
        name:document.getElementById('name_on_card').value,
        address:document.getElementById('address').value,
        address_city:document.getElementById('city').value,
        address_state:document.getElementById('province').value,
        address_zip:document.getElementById('postalcode').value,
    }
    stripe.createToken(cardElement,options).then(function(result) {
        var displayError = document.getElementById('card-errors'); 
        if(typeof result.error != 'undefined') { 
            document.getElementById("complete-order").disabled = false;
            displayError.textContent = result.error.message;
        }

        // creating token success
        if(typeof result.token != 'undefined') { 
            console.log(result.token.id);
            document.getElementById("stripe-token-id").value = result.token.id;
            // document.getElementById('checkout-form').submit();
        } 
    });
}
function stripeTokenHandler(token){

    var form = document.getElementById('checkout-form'); 
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type','hidden'); 
    hiddenInput.setAttribute('name','stripeToken'); 
    hiddenInput.setATtribute('value',token.id);
    form.submit();
 }