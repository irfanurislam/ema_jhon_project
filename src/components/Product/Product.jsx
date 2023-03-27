import React from 'react';
import './product.css'

const Product = (props) => {
    const {img,name,id,price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>Shoes:{name}</h4>
        </div>
    );
};

export default Product;