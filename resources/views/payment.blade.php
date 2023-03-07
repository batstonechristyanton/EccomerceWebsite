
     
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/stripe_checkout.css') }}" rel="stylesheet" />
    <script src="https://js.stripe.com/v3/"></script>
         @if (session()->has('success_message'))
                    <div class="alert alert-success">
                        {{ session()->get('success_message') }}
                    </div>
                @endif
                @if (count($errors) > 0)
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li> {{ $error }} </li>
                            @endforeach
                        </ul>
                    </div>
                @endif
    <form id="checkout-form" method="post" action="{{ route('createCharge.post') }}">
        <h2>Billing Details</h2>

        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" class="form-control" id="email" name="email" value="{{old('email')}}" required >
        </div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" value="{{old('name')}}" required >
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" name="address" value="{{old('address')}}" required>
        </div>

        <div class="half-form">
            <div class="form-group">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city" name="city" value="{{old('city')}}" required >
            </div>
            <div class="form-group">
                <label for="province">Province</label>
                <input type="text" class="form-control" id="province" name="province" value="{{old('province')}}" required>
            </div>
        </div> <!-- end half-form -->

        <div class="half-form">
            <div class="form-group">
                <label for="postalcode">Postal Code</label>
                <input type="text" class="form-control" id="postalcode" name="postalcode" value="{{old('postalcode')}}" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" name="phone" value="{{old('phone')}}" required >
            </div>
        </div> <!-- end half-form -->

        <div class="spacer"></div>

        <h2>Payment Details</h2>

        <div class="form-group">
            <label for="name_on_card">Name on Card</label>
            <input type="text" class="form-control" id="name_on_card" name="name_on_card" value="">
            
        </div>
     
        @if (session('success'))
        <div 
          >
            Payment Successful!
        </div>
        @endif
       
            @csrf             
            <input type='hidden' name='stripeToken' id='stripe-token-id'>                              
            <label for="card-element" class="mb-5">Checkout Forms</label>
            <br>
            <div id="card-element" class="form-control" ></div>
            <button 
                class="btn btn-success mt-3"
                type="submit" 
                id="complete-order"
                >Complete Order 
            </button>
        <div id="card-errors" role="alert"></div>
        </form>
            
                
                     
                  
               
    
