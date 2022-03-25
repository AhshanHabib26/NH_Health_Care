import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const cartHandeler = (product) =>{

        if(!product){
            return
        }else{
            const newCart = [...cart, product]
            setCart(newCart)
        }
    }

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <div className="products_container">

                <div className="products_info">
                {
               products.map( product => <Product 
                     product={product}
                     key={product.id}
                     cartHandeler={cartHandeler}
               ></Product>)
           }
        </div>
           <div className="products_summery">
               <div className='sticky'>
               <h2>Your Selected Items</h2>

           

              {
                 cart.map((item) =>  (
                    <div className="product_cart">
                        <div>
                        <img src={item.img} alt="" />
                        </div>
                        <div className='cart_product_info'>
                            <p>{item.name}</p>
                            <h3>Price: {item.price}</h3>
                        </div>
                         
                    </div>
                 )) 
              }
               </div>
           </div>
           </div>
        </div>
    );
};

export default Products;