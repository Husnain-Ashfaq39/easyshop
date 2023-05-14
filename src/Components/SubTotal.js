import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './Reducer'
import { useNavigate } from 'react-router-dom'

function SubTotal() {

  const [{ Cart }, dispatch] = useStateValue()

  const navigate=useNavigate();
  return (
    <div className='subtotal'>

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({Cart.length} items) : <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type="checkbox"  />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(Cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}


      />
      <button onClick={e=> navigate('/payment')} >Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal