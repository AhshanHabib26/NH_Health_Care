import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
   
    const cartHandeler = (product) =>{
            const newCart = [...cart, product]
            setCart(newCart)
           
    }

    const getRandomProducts = () =>{
        if(cart.length === 0){
            return
        }else{
             cartHandeler(cart[Math.round(Math.random() * cart.length)])
             
        }  
    }

    const selectAgainProducts = () =>{
        if(cart.length === 0){
            return
        }else{
            setCart([])
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
                 cart.map((item) =>   (
                    <div key={item.id} className="product_cart">
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
                    <div className="cart_button">
                        <div onClick={getRandomProducts} className="select_btn">
                            <p>Select <span>1</span> For Me</p>
                        </div>
                        <div onClick={selectAgainProducts} className="unSeelct_btn">
                            <p>Select Again</p>
                        </div>
                    </div>
               </div>
           </div>
           </div>
        </div>
    );
};

export default Products;