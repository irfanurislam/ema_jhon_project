import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [products,setProduct] = useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='shoping-container'>
            <div className='products-container'>
                <h2>products item here {products.length}</h2>
            </div>
            <div className='order-container'>
                <h2>order container</h2>
            </div>
        </div>
    );
};

export default Shop;