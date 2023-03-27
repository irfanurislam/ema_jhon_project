import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProduct] = useState([])
    //ami cart new vabe add korbo tai state change korbo
    const [cart,setCart] = useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);
   

    const handletoart =(product) =>{
        //cart ke spread array rakhlam protitabar add kore new cart add hoi product
        const newCart = [...cart,product];
        setCart(newCart)
    }


    return (
        <div className='shoping-container'>
            <div className='products-container'>
                
                {
                    products.map(product => <Product 
                        key ={product.id}
                        product = {product}
                        handletocart = {handletoart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order summary</h2>
                <p>Cart Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;