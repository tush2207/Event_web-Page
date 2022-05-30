import React from 'react'
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import './Product.css'


function Products (props) 
  {
    const{Product,onAdd}=props;
    console.log(props)

  return (
    <div className='products'>
        { Product && Product.map((Product)=>(
          <div className='card'>
            <div className='img' >
              <img className='product-img'
              src={Product.img} 
              alt={Product.name}
              />
            </div>
            <div>
              <h4 className='product-name'>{Product.name}</h4>
            </div>
            <div className='desc'>
              <h4 className='product-desc'>{Product.desc}</h4> 
            </div>
           <div>
              <h4 className='product-price'>₹{Product.price}</h4>
            </div>


            <div>
            <Button
            className='Button'
            variant="contained" 
            onClick={()=> onAdd(Product)}
            startIcon={<AddShoppingCartIcon />}
            >
            ADD TO CART
            </Button>
            </div>

          </div>
        ))}
        </div>
  )
        }
export default Products