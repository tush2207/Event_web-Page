import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import './Cart.css'

function Cart (props){
console.log(props)

const {cartItems,onAdd,onRemove}=props;
// const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
// const taxPrice = itemsPrice * 0.14;
// const shippingPrice = itemsPrice > 2000 ? 0 : 20;
// const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className='cart-item'>
      <div className='class-item-head'>
        <h2>CART ITEM'S</h2>
      </div>
      <div className='clear-cart'>
        {cartItems.length >=1 && (
          <Button className='clear-cart-btn' >{<HighlightOffIcon/>}</Button>
        )}
      </div>
      <div>
      { cartItems.length===0 && (
      <div className ='Empty'> No Items are added</div>
      )}
      </div>

      <div>
        { cartItems && cartItems. map((item)=>
        {
          <div key={item.id} className='cart-item-list'>  
            {/* <img 
            className='img'
            src={item.img}
            alt={item.name}
            />  */}

            <div className='cart-item-name'>
              {item.name}
            </div>

            <div className='cart-item-function'>
              <Button className='cart-item-add'onClick={()=> onAdd}>{<AddCircleIcon/>}</Button>
              <Button className='cart-item-remove' onClick={()=> onRemove}>{<RemoveCircleIcon/>}</Button>
            </div>
            <div className='cart-item-price'>
              {item.quantity} * {item.price}
              {item.name}
            </div>
                 </div>

        })}

      </div>
    
    {/* <div className='cart-item-total-price-name'>
      Total Price
      <div className='cart-item-total'>₹{total.price}</div>
    </div> */}
    </div>
  )

      }
export default Cart

