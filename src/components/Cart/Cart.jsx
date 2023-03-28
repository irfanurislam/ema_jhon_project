import React from 'react';
import './Cart.css'

const Cart = (props) => {
   
    const {cart} = props;
    //console.log(cart);
    //cart ekta array eikhane price ace product er jeita shop.jsx dekhle bujte parbo
    let totalprice = 0;
    let totalShipping = 0;
    let quantity = 0;


    for(const product of cart){
        
        totalprice = totalprice + product.price * product.quantity;

        totalShipping = totalShipping + product.shipping;

        quantity = quantity + product.quantity;
    }
   const tax = totalprice * 7/100;
  const grandTotal = totalprice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Selected items {quantity}</p>
            <p>toal price ${totalprice}</p>
            <p>shipping : ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <p>Grand total :${grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;