import './Product.css'
import {FaLuggageCart} from 'react-icons/fa'

const Product = (props) => {
    
    const {img, name, price} = props.product
    const {cartHandeler} = props



    return (
        <div>
        <div className="product_container">
            <div className="product_img">
                <img src={img} alt="" />
            </div>
            <div className="product_info">
                <h3>Name: {name}</h3>
                <h5>Price: $ {price}</h5>
            </div>
            <div className="product_btn" onClick={() => cartHandeler(props.product)} >
                <button>Add To Cart <span><FaLuggageCart/></span> </button>
            </div>
        </div>
        </div>
    );
};

export default Product;