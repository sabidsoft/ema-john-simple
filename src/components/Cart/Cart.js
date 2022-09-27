import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let quantity = 0
    let totalPrice = 0
    let totalShippingPrice = 0

    for(const product of cart){
        quantity = quantity + product.quantity
        totalPrice = totalPrice + (product.price * product.quantity)
        totalShippingPrice = totalShippingPrice + product.shipping
    }

    let tax = totalPrice * 0.1
    let grandTotal = totalPrice + totalShippingPrice + tax

    return (
        <div className='cart'>
            <h5 className='oreder_summary'>Order Summary</h5>
            <div className="cart_info">
                <p className='cart_info_text'>Selected Items: {quantity}</p>
                <p className='cart_info_text'>Total Price: ${totalPrice}</p>
                <p className='cart_info_text'>Total Shipping Charge: ${totalShippingPrice}</p>
                <p className='cart_info_text'>Tax: ${tax.toFixed(2)}</p>
                <p className='grand_total'>Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
            <div className="btn_container">
                <button className='btn_clear_cart'>Clear Cart</button>
                <button className='btn_review_order'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;