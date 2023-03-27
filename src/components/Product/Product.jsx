import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './product.css'

const Product = (props) => {
    //console.log(props)
    const {img,name,id,price,seller,ratings} = props.product;
    
    const handletocart = props.handletocart






    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p> ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>{ratings} stars</p>
           </div>
            <button onClick={() => handletocart(props.product)} className='btn-cart'>
                Add Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;