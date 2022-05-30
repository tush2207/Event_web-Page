import './App.css';
import React, { useState } from 'react';
import data from './Components/Back/Data';
import Header from './Components/front/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Home from './Components/Page/Home'
import Products from './Components/front/Product/Products';
import About from './Components/Page/About';
import Drawers from './Components/front/Header/Drawers';


function App (){


  const {Product} =data ;
  const [cartItems,setcartItems] = useState([]);

  const onAdd=(Product)=>{ 
    console.log("onadd")
    const ProductExist= cartItems.find((item)=> item.id === Product.id);
    if(ProductExist){
      setcartItems(cartItems.map((item)=>item.id === Product.id ?
      { ...ProductExist,quantity:ProductExist.quantity+1}:item)
      );
      }
      else{
        setcartItems([...cartItems,{...Product,quantity:+1} ]);
      }
    }

    const onRemove=(Product)=>
    {
      const ProductExist= cartItems.find((item)=> item.id === Product.id);
      if(ProductExist.quantity===1){
        setcartItems(cartItems.filter((item)=>item.id !== Product.id));

      }
      else{
        setcartItems(
          cartItems.map((item)=> 
          item.id ==Products.id?  
          {...ProductExist,quantity: ProductExist.quantity-1}
          :item


        )
        );
      }
    };
    // const cartclearance=()=>{
    //   setcartItems([])
    // }

  
  
    return ( 
    <>
    <Header/>
    <Routes>
        <Route path='Drawer' element={<Drawers/>} />
        <Route path="Home" element={<Home />} />
        <Route path="Products" key={Product.id} element={<Products Product ={Product} onAdd={onAdd} />}/>
        <Route path="cart" element={<Cart  cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="About" element={<About />} />
      </Routes>        
   
    </>
    );
}

export default App;