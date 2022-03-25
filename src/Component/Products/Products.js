import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <div className="products_container">
           {
               products.map( product => <Product 
                     product={product}
                     key={product.id}
               
               ></Product>)
           }
           </div>
        </div>
    );
};

export default Products;