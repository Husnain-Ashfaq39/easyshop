import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({ id, title, image, price, rating }) {

    const [{Cart}, dispatch] = useStateValue()

    const AddToCart = () => {
        // dispatch the item into the data layer
        
         console.log(Cart);
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        console.log(Cart);
    };
    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (


                        <p>⭐</p>
                    ))}


                </div>
            </div>
            <img src={image} alt="book" />
            <button onClick={AddToCart}>Add to Cart</button>
        </div>
    )
}

export default Product