import React from 'react';
import './product.css'

const Product = (props) => {
    const {img,name,id,price,seller,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p> ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>{ratings} stars</p>
           </div>
           <button className='btn-cart'>Add Cart</button>
        </div>
    );
};

export default Product;