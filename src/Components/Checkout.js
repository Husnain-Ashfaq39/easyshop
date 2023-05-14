import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'

function Checkout() {
  const [{ Cart,user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img src="https://www.shutterstock.com/image-vector/big-sale-discount-template-banner-260nw-1407389282.jpg" alt="Sale Offer" className="checkout_ad" />
        <div >
        <h3>Hello {!user? 'Guest':user.email}</h3>
          <h2 className="checkout_title">Your Shoping Cart</h2>
          {Cart.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  )
}
// https://racuntech.com/wp-content/uploads/2023/03/WEBSITE-BANNER-LANDSCAPE-3.png
export default Checkout