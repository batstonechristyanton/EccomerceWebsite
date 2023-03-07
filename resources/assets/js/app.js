const axios = require('axios');
var className = document.querySelectorAll('.quantity');

Array.from(className).forEach(function(element){
    element.addEventListener("change",function(){ 
        const id = element.getAttribute('data-id');
    axios.patch(`/cart/${id}`, {
        quantity:this.value
      })
      .then(function (response) {
        console.log(response);
        window.location.href = '/cart'
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
})
}) 



var StripEnv = process.env.MIX_STRIPE_KEY;
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
            let token = result.token.id
            stripeTokenHandler(token)
        } 
    });
}
function stripeTokenHandler(token){

    var form = document.getElementById('checkout-form'); 
    document.getElementById('stripe-token-id').value = token;
    // form.submit();
 }


