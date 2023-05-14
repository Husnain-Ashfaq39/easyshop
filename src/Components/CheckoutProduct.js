import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, price, title, image, rating}) {
    const[{Cart},dispatch]=useStateValue();
    const RemoveFromCart=()=>
{
    dispatch
    ({
        type:'REMOVE_FROM_CART',
        id:id,

    })
}
    return (
        <div className='CheckoutProduct'>
            <img className='CheckoutProduct_image' src={image} alt="ProductImage" />
            <div className="CheckoutProduct_info">
                <p className='CheckoutProduct_title'>{title}</p>
                <p className="CheckoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <button onClick={RemoveFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct