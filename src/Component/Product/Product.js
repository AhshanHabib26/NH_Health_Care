import React from 'react';
import './Product.css'

const Product = (props) => {
console.log(props.product)

const {img, name, price} = props.product



    return (
        <div>
        <div className="product_container">
            <div className="product_img">
                <img src={img} alt="" />
            </div>
            <div className="product_info">
                <h3>Name: {name}</h3>
                <p>Price: $ {price}</p>
            </div>
        </div>
        </div>
    );
};

export default Product;