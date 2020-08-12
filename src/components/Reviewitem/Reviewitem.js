import React from 'react';
import './Reviewitem.css';

const Reviewitem = (props) => {
    const {name, quantity, key} = props.product
    
    return (
        <div className = "reviewitem">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <button onClick = {() => props.removeProduct(key)} className = "product-button">Remove</button>
        </div>
    );
};

export default Reviewitem;