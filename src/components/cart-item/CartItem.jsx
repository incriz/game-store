import React from 'react'
import {IoClose} from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/reducer'
import './cart-item.css'

export const CartItem = ({title, price, id}) => {

  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch(deleteItemFromCart(id))
  }

  return (
    <div className='cart-item'>
        <span>{title}</span>
        <div className="cart-item__price">
            <span>{price} руб.</span>
            <IoClose style={{cursor: 'pointer'}} onClick={handleClick} />
        </div>
    </div>
  )
}
