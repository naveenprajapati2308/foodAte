import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delevery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='country' />
                </div>
                <input type="text" placeholder='Phone number' />

            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Delivery fee</p>
                            <p>{getTotalCartAmount() === 0 ? 0 : 40}</p>

                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 60}</p>
                        </div>
                    </div>
                    <button>PAY</button>
                </div>

            </div>

        </form>
    )
}

export default PlaceOrder
