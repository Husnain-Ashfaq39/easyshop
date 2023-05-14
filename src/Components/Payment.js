import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './Reducer'
import './Payment.css'

function Payment() {
    const [{ Cart, user }, dispatch] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const handleSubmit = e => {

    }
    const handleChange = event => {

        // Listen for changes in the cardElement
        //and display any error as the customer types his card details
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")


    }
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout(<Link to="/checkout">{Cart?.length} items</Link>)
                </h1>
                {/* payment Section: Delivery Address */}
                <div className="payment_Section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>i9/3 Street 4</p>
                        <p>Islamabad pakistan</p>
                    </div>
                </div>
                {/* payment Section: Products Review */}
                <div className="payment_Section">
                    <div className="payment_title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {Cart.map(item =>
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )}
                    </div>
                </div>
                {/* payment Section: Payment Method */}
                <div className="payment_Section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* stripe details will be here */}
                        <form onSubmit={handleSubmit}>

                            <  CardElement onchange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>

                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(Cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}

                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>processing</p> : "Buy Now"}
                                    </span>
                                </button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment