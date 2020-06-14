import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const totalPrise = cart.reduce((totalPrise, prd) => totalPrise + prd.price,0)

    let totalPrise = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        totalPrise = totalPrise + product.price;
    }

    let shipping = 0;
    if(totalPrise > 35){
        shipping = 0;
    }
    else if(totalPrise > 15){
        shipping = 4.99;
    }
    else if(totalPrise > 0){
        shipping = 12.99;
    }

    const tax = (totalPrise / 10).toFixed(2);
    const grandTotal = (totalPrise + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrise)}</p>
            <p><small>Tax: {tax}</small></p>
            <p><small>Shipping: {shipping}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;