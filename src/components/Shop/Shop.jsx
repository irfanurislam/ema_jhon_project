import React, { useEffect, useState } from 'react';
 import { addToDb, getShoppingCart } from '../../utilities/fakedb';

import Cart from '../Cart/Cart';
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


     useEffect(() =>{
      const storedcart = getShoppingCart();
      let savedcard = []
       console.log(storedcart)
       //step1 get the product by using id


      for(const id in storedcart){
        //step 2 get the product using the id 

        const addedProduct = products.find(product=> product.id === id);

        //3get the quantuty the prudct
           
         if(addedProduct){
            const quantuty = storedcart[id];
            addedProduct.quantuty = quantuty;
            //step 4 add the added product to the saved product

            savedcard.push(addedProduct);

       
        
         }
        
        
      }

    //   5 step here
       setCart(savedcard)
    },[products])
   



    const handletoart =(product) =>{
        //cart ke spread array rakhlam protitabar add kore new cart add hoi product
        let newCart = []
           // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exist = cart.find(pd => pd.id === product.id)
        if(!exist){
            product.quantity = 1;
            newCart = [...cart,product]
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining,exist]
        }
        setCart(newCart)
        addToDb(product.id)
        
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
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;