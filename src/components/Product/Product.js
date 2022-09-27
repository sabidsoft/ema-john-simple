import React from 'react';
import './Product.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
    const { name, seller, price, ratings, img } = product
    
    return (
        <div className='product'>
            <img src={img} alt="product_img" />
            <div className='product_info'>
                <p className='name'>{name}</p>
                <p className='price'>Price: <span>$</span>{price}</p>
                <p className='manufacturer'>Manufacturer: {seller}</p>
                <p className='ratings'>Ratings: {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn_cart'>
                <p className='btn_text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;