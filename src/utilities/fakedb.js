// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = JSON.parse(localStorage.getItem('shopping-cart'));
    if(storedCart){
        shoppingCart = storedCart;
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        shoppingCart[id] = quantity + 1;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = JSON.parse(localStorage.getItem('shopping-cart'));
    if(storedCart){
        shoppingCart = storedCart;
    }
    return shoppingCart
}

const removeFromDb = id => {
    const storedCart = JSON.parse(localStorage.getItem('shopping-cart'))
    if(storedCart){
        delete storedCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(storedCart))
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}













// another way
// const removeFromDb = id =>{
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         const shoppingCart = JSON.parse(storedCart);
//         if(id in shoppingCart){
//             delete shoppingCart[id];
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//     }
// }