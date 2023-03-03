<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\LandingPage;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\SaveForLaterController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\PaymentController;


use Illuminate\Support\Facades\Route;
use Gloudemans\Shoppingcart\Facades\Cart;

use App\Http\Controllers\StripeController;

// Route::view('/', 'landing-page');
// Route::get('/', function () {
// })->name('landing-page');
Route::get('/', [LandingPage::class,'index'])->name('landing-page');
Route::get('/shop', [ShopController::class,'index'])->name('shop.index');
Route::get('/shop/{product}', [ShopController::class,'show'])->name('shop.show');
Route::get('/cart', [CartController::class,'index'])->name('cart.index');
Route::post('/cart', [CartController::class,'store'])->name('cart.store');
Route::delete('/cart/{product}',  [CartController::class,'destroy'])->name('cart.destroy'); 
Route::post('/cart/switchToSaveForLater/{product}',[CartController::class,'switchToSaveForLater'])->name('cart.switchToSaveForLater');  

Route::delete('saveForLater/{product}',  [SaveForLaterController::class,'destroy'])->name('saveForLater.destroy'); 
Route::post('/saveForLater/switchToCart/{product}',[SaveForLaterController::class,'switchToCart'])->name('saveForLater.switchToCart');  

Route::get('/checkout',[CheckoutController::class,'index'])->name('checkout.index');

Route::get('/payment', [PaymentController::class, "index"]);
Route::post('stripe', [PaymentController::class, "stripePost"])->name('stripe.post');



Route::view('/product', 'product');
// Route::view('/cart', 'cart');
Route::get('empty', function () {
    Cart:: instance('saveForLater')->destroy();
});

Route::view('/thankyou', 'thankyou');
