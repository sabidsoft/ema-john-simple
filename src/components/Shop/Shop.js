import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useState(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                addedProduct.quantity = storedCart[id]
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(exists){
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }else{
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
        
    }

    return (
        <div className='shop_container'>
            <div className="products_container">
                {
                    products.map(product => {
                        return (
                            <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            />
                        )
                    })
                }
            </div>
            <div className="cart_container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;
