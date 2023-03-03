@extends('layout')

@section('title', 'Checkout')

@section('extra-css')

@section('content')

{{-- <script src="https://js.stripe.com/v3/"></script> --}}
{{-- <script src="{{ asset('js/stripe_checkout.js') }}" defer></script>
<link href="{{ asset('css/stripe_checkout.css') }}" rel="stylesheet" /> --}}
<div class="container">

        <h1 class="checkout-heading stylish-heading">Checkout</h1>
        <div class="checkout-section">
            <div>
                <form action="#">
                    <h2>Billing Details</h2>

                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" id="email" name="email" value="">
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name" value="">
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" name="address" value="">
                    </div>

                    <div class="half-form">
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" class="form-control" id="city" name="city" value="">
                        </div>
                        <div class="form-group">
                            <label for="province">Province</label>
                            <input type="text" class="form-control" id="province" name="province" value="">
                        </div>
                    </div> <!-- end half-form -->

                    <div class="half-form">
                        <div class="form-group">
                            <label for="postalcode">Postal Code</label>
                            <input type="text" class="form-control" id="postalcode" name="postalcode" value="">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" class="form-control" id="phone" name="phone" value="">
                        </div>
                    </div> <!-- end half-form -->

                    <div class="spacer"></div>

                    <h2>Payment Details</h2>

                    <div class="form-group">
                        <label for="name_on_card">Name on Card</label>
                        <input type="text" class="form-control" id="name_on_card" name="name_on_card" value="">
                        
                    </div>
                    <div >
                                
                    </div>
                    
                    {{-- <div class="form-group">
                        <label for="cc-number">Credit Card Number</label>
                        <input type="text" class="form-control" id="cc-number" name="cc-number" value="">
                    </div>
                    
                    <div class="half-form">
                        <div class="form-group">
                            <label for="expiry">Expiry</label>
                            <input type="tpext" class="form-control" id="expiry" name="expiry" placeholder="MM/DD">
                        </div>
                        <div class="form-group">
                            <label for="cvc">CVC Code</label>
                            <input type="text" class="form-control" id="cvc" name="cvc" value="">
                        </div>
                    </div> <!-- end half-form --> --}} 
                    
                    {{-- 
                        <form id="payment-form">
                            <div id="link-authentication-element">
                                <!--Stripe.js injects the Link Authentication Element-->
                            </div>
                            <div id="payment-element">
                                <!--Stripe.js injects the Payment Element-->
                            </div>
                            <button id="submit">
                                <div class="spinner hidden" id="spinner"></div>
                                <span id="button-text">Pay now</span>
                            </button>
                            <div id="payment-message" class="hidden"></div>
                        </form> --}}
                        
                        
                        
                        
                    </form>
                    @include('payment')
                </div>

            
            
            <div class="checkout-table-container">
                <h2>Your Order</h2>
                
                <div class="checkout-table">
                    @foreach (Cart::content() as $item)
                    <div class="checkout-table">
                        <div class="checkout-table-row">
                            <div class="checkout-table-row-left">
                                <img src="{{ asset('img/products/' . $item->model->slug . '.jpg') }}" alt="item"
                                class="checkout-table-img">
                                <div class="checkout-item-details">
                                    <div class="checkout-table-item">{{ $item->model->name }}</div>
                                    <div class="checkout-table-description">{{ $item->model->details }}</div>
                                    <div class="checkout-table-price">{{ $item->model->presentPrice() }}</div>
                                </div>
                            </div> <!-- end checkout-table -->
                            
                            <div class="checkout-table-row-right">
                                <div class="checkout-table-quantity">{{ $item->qty }}</div>
                            </div>
                        </div> <!-- end checkout-table-row -->
                        @endforeach
                        <div class="checkout-totals">
                            <div class="checkout-totals-left">
                                Subtotal <br>
                                {{-- Discount (10OFF - 10%) <br> --}}
                                Tax <br>
                                <span class="checkout-totals-total">Total</span>
                                
                            </div>
                            
                            <div class="checkout-totals-right">
                                {{ presentPrice(Cart::subtotal(0,0,"")) }} <br>
                                {{-- -$750.00 <br> --}}
                                {{ presentPrice(Cart::total(0,0,"")) }} <br>
                                {{-- <span class="checkout-totals-total">$8474.97</span> --}}
                                
                            </div>
                        </div> <!-- end checkout-totals -->
                        
                    </div>
                    
                </div> <!-- end checkout-section -->
            </div>
            
            @endsection
            
    