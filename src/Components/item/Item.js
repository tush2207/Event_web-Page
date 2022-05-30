import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


export const Item = ({Items,onDelete}) => {
    console.log(Items.key)
  return (
    <>
        <table>

          <tr>
            <th>Item Code</th>
            <th>Image</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>12% GST </th>
            <th>Total</th>
            <th>Delete</th>
          </tr> 

        {Items.map((props)=>{
             
        {console.log(props.key)}

            return<tr key={props.key}>
           
            <td>{props.itemcode}</td>
            <td>{props.Image}</td>
            <td>{props.itemName}</td>
            <td>{props.quantity}</td>
            <td>{props.price}</td>
            <td>{props.price* 0.12}</td>
            <td>{(props.price* props.quantity)+ props.price* 0.12 }</td>
         
            <td><IconButton aria-label="delete" onClick={() => {onDelete(props.key)}} ><DeleteIcon /></IconButton></td>
            
          </tr>
        })}
        </table>
        <nav>
        {/* <Link to="/">Items</Link> */}


        </nav>
        
    
      </>   
  )
}
export default Item;