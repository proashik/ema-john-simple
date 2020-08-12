import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const auth = useAuth();

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productkeys) => {
        // console.log("remove clicked...", productkeys)
        const newCart = cart.filter(pd => pd.key != productkeys)
        setCart(newCart);
        removeFromDatabaseCart(productkeys)
    }

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProduct = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProduct);
    }, []);

    let thankyou;
    if(orderPlaced){
        thankyou = <img src= {happyImage} alt=""/>
    } 
    
    return (
        <div className="twin-container">
            <div className = "product-container">
            {cart.map(pd => <Reviewitem removeProduct = {removeProduct} key = {pd.key} product = {pd}></Reviewitem>)}
            </div>
            {
                thankyou
            }
            {
                !cart.length && <h1>You have not added anything yet.<a href="/shop">Keep shopping</a></h1>
            }

            <div>
                <Cart cart = {cart}>
                    {/* <button onClick = {handlePlaceOrder} className = "product-button">Place Order</button> */}
                    <Link to="Shipment">
                        {
                            auth.user ? 
                            <button className="product-button">Proceed to Shipment</button>
                            :
                            <button className="product-button">Login to Proceed</button>
                        }
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;