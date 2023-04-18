@extends('layout')

@section('title', 'Checkout')


@section('extra-css')
    <style>
        .mt-32 {
            margin-top: 32px;
        }
    </style>

@endsection

@section('content')


<div class="container">

        <h1 class="checkout-heading stylish-heading">Checkout</h1>
        <div class="checkout-section">
            <div>
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
            
    