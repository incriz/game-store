import React from 'react'
import {BiCartAlt} from 'react-icons/bi'
import './cart.css'

export const Cart = () => {
  return (
    <div className='cart-block'>
        <BiCartAlt size={25} className="cart-block__icon" />
        <span className='cart-block__total-price'>2311 руб.</span>
    </div>
  )
}
