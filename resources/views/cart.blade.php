@extends('layout')

@section('title', 'Shopping Cart')

@section('extra-css')

@endsection

@section('content')

<script src="{{ asset('js/app.js') }}" defer></script>
<div class="breadcrumbs">
    <div class="container">
            <a href="#">Home</a>
            <i class="fa fa-chevron-right breadcrumb-separator"></i>
            <span>Shopping Cart</span>
        </div>
    </div> <!-- end breadcrumbs -->

    <div class="cart-section container">
        <div>
            <div>
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
                @if (Cart::count() > 0)
                    <h2>{{ Cart::count() }} item(s) in Shopping Cart }</h2>

                    <div class="cart-table">
                        @foreach (Cart::content() as $item)
                            <div class="cart-table-row">
                                <div class="cart-table-row-left">
                                    <a href="{{ route('shop.show', $item->model->slug) }} "><img
                                            src="{{ asset('img/products/' . $item->model->slug . '.jpg') }}" alt="item"
                                            class="cart-table-img"></a>
                                    <div class="cart-item-details">
                                        <div class="cart-table-item"><a
                                                href="{{ route('shop.show', $item->model->slug) }}">{{ $item->model->name }}</a>
                                        </div>
                                        <div class="cart-table-description">{{ $item->model->details }}</div>
                                    </div>
                                </div>
                                <div class="cart-table-row-right">
                                    <div class="cart-table-actions">
                                        <form action="{{ route('cart.destroy', $item->rowId) }}" method="post">
                                            {{ csrf_field() }}
                                            {{ method_field('DELETE') }}
                                            <button type="submit" class="cart-options"> Remove </button>
                                        </form> 

                                        <form action="{{ route('cart.switchToSaveForLater', $item->rowId) }}" method="post">
                                            {{ csrf_field() }}
                                           
                                            <button type="submit" class="cart-options"> Save For Later </button>
                                        </form> 
                                       
                                    </div>
                                    <div>
                                        <select class="quantity" data-id={{ $item->rowId }}> 
                                            @for($i = 1; $i < 5 + 1; $i++)
                                            <option {{ $item->qty == $i ? 'selected ' : ''}}> {{ $i }}</option>
                                            @endfor   
                                        </select>
                                    </div>
                                    <div>{{ $item->model->presentPrice() }}</div>
                                </div>
                            </div> <!-- end cart-table-row -->
                        @endforeach

                        <a href="#" class="have-code">Have a Code?</a>

                        <div class="have-code-container">
                            <form action="#">
                                <input type="text">
                                <button type="submit" class="button button-plain">Apply</button>
                            </form>
                        </div> <!-- end have-code-container -->

                        <div class="cart-totals">
                            <div class="cart-totals-left">
                                Shipping is free because we’re awesome like that. Also because that’s additional stuff I
                                don’t
                                feel like
                                figuring out :).
                            </div>

                            <div class="cart-totals-right">
                                <div>
                                    Subtotal <br>
                                    Tax(13%) <br>
                                    <span class="cart-totals-total">Total</span>
                                </div>
                                <div class="cart-totals-subtotal">
                                    {{ presentPrice(Cart::subtotal(0,0,"")) }} <br>
                                    {{ presentPrice(Cart::tax()) }} <br>
                                    <span class="cart-totals-total">{{ presentPrice(Cart::total(0,0,"")) }}</span>
                                </div>
                            </div>
                        </div> <!-- end cart-totals -->

                        <div class="cart-buttons">
                            <a href="{{ route('shop.index') }}" class="button">Continue Shopping</a>
                            <a href="{{ route('checkout.index') }}" class="button-primary">Proceed to Checkout</a>
                        </div>
                    @else
                        <h3> No items in Cart ! </h3>
                        <div class="cart-buttons">
                            <a href="{{ route('shop.index') }}" class="button">Continue Shopping</a>
                            <a href="{{ route('checkout.index') }}" class="button-primary">Proceed to Checkout</a>
                        </div>
                @endif

                @if (Cart::instance('saveForLater')->count() > 0)
                <h2>{{ Cart::instance('saveForLater')->count() }} item(s) Saved for Later }</h2>

                <div class="saved-for-later cart-table"> 
                    @foreach (Cart::instance('saveForLater')->content() as $item )
                        
                    <div class="cart-table-row">
                        <div class="cart-table-row-left">
                            <a href="{{ route('shop.show', $item->model->slug)}}"><img src={{ asset('img/products/'.$item->model->slug.'jpg')}} alt="item" class="cart-table-img"></a>
                            <div class="cart-item-details">
                                <div class="cart-table-item"><a href="{{ route('shop.show', $item->model->slug)}}">{{ $item->model->slug }}</a></div>
                                <div class="cart-table-description">{{ $item->model->name }}</div>
                            </div>
                        </div>
                        <div class="cart-table-row-right">
                            <div class="cart-table-actions">
                                <form action="{{ route('saveForLater.destroy', $item->rowId) }}" method="post">
                                    {{ csrf_field() }}
                                    {{ method_field('DELETE') }}
                                    <button type="submit" class="cart-options"> Remove </button>
                                </form> 

                                <form action="{{ route('saveForLater.switchToCart', $item->rowId) }}" method="post">
                                    {{ csrf_field() }}
                                   
                                    <button type="submit" class="cart-options"> Move To Cart </button>
                                </form>     
                            {{-- left off at 42:49     --}}
                            </div>
                     
                            <div>{{ $item->model->price }}</div>
                        </div>
                    </div> <!-- end cart-table-row -->
                    @endforeach
                    
               </div> <!-- end saved-for-later -->
                @else
                <h3> You have no items for Later </h3> 
                @endif
            </div>

        </div> <!-- end cart-section -->

        @include('partials.might-like')


    @endsection
