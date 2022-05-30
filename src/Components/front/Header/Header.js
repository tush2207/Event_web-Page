import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';



const Header = () => 
{
  return (

    <>
      <div className='head'>
    <img src="./img/new123.png" />
    <h1>Tushar Event's</h1>
    <h1>Memorable events don't just happen. They happen to be our business.</h1>
    </div>
  
    <header className='header'>
        <div className='MenuIcon'>
   
            <Link to="/Drawers"><MenuIcon /></Link>

              
        </div>
      
   
      
        {/* <div className='nav-head'>

              Tushar Event's
      </div> */}
        <div className='header-link'>
          <ul>
            <li>
              <Link to="/Home"><HomeIcon/></Link>
            </li>
          </ul>
          <ul>
            <li>
            <Link to="/Products"><CategoryIcon/></Link>
            </li>
          </ul>
          <ul>
            <li>
            <Badge badgeContent={2} color="primary">
            <Link to="/cart"><ShoppingCartIcon/></Link>

            </Badge>

            </li>
          </ul>
          <ul>
            <li>
            <Link to="/About"><AccountCircleIcon/></Link>
            </li>
          </ul>
          <ul>
            <li>
            <Link to="/"><ExitToAppIcon/></Link>
            </li>
          </ul>
        </div>
    </header>
    </>
  
  )
}


export default Header
