<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->category) {
            $products = Product::with('categories')->whereHas('categories', function ($query) {
                $query->where('slug', request()->category);
            });
            $categories = Category::all();
            $categoryName = $categories->where('slug', request()->category)->first()->name;
        } else {
            $products = Product::take('featured',true); 
            $categories = Category::all();
            $categoryName = "Featured";
   
        }

        if(request()->sort == 'low_high') {
            $products = $products->orderBy('price')->paginate(9); 

        } elseif  (request()->sort == 'high_low'){
            $products = $products->orderBy('price','desc')->paginate(9); 
        } 
        else {
            $products = $products->paginate(9);
        }

        return view('shop')->with([
            'products' => $products,
            'categories' => $categories,
            'categoryName' => $categoryName
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();
        $mightAlsoLike = Product::where('slug', '!=', $slug)->inRandomOrder()->take(4)->get();

        return view('product')->with([
            'product' => $product,
            'mightAlsoLike' => $mightAlsoLike,
        ]);
    }
}
