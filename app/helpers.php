<?php
use \NumberFormatter;

function presentPrice($price)
{   
  
    $amount = new NumberFormatter("en_US", NumberFormatter::CURRENCY); 
    $prices = $amount->formatCurrency($price, 'USD');

    return $prices;
}
