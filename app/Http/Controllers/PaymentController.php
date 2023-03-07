<?php
  
namespace App\Http\Controllers;
  
use Stripe;
use Illuminate\Http\Request;
use App\Http\Requests\CheckOutRequest;
use Gloudemans\Shoppingcart\Facades\Cart;
  
class PaymentController extends Controller
{
    public function index()
    {
        return view('payment');
    }
     
      
    public function createCharge(CheckOutRequest $request)
    {   
        dd($request->all());
       $contents = Cart::Content()->map(function($item){
        return $item->model->slug.','.$item->qty; 
       })->values()->toJson();

        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
       try {

           Stripe\Charge::create ([
                   "amount" => Cart::total(0,0,"") *100,
                   "currency" => "CAD",
                   "source" => $request->stripeToken,
                   "receipt_email" => $request->email,
                   "description" => "Order" , 
                   "metadata" => [
                       'contents' => $contents, 
                       'quantity'=> Cart::instance('default')->count()
                   ]
           ]);
            
       }catch(\Stripe\Exception\CardException $e){

        return back()->withErrors('Error!' . $e->getMessage());
       }

        Cart::instance('default')->destroy();
        return redirect()->route('confirmation.index')->with('success_message', 'Thank you ! payment has been sucessfully accepted');
    }
}