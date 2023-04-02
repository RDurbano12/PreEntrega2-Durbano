import { GiShoppingCart } from 'react-icons/Gi';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ClickAwayListener } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/context';




const Cartwidget = () => {
  const {cart, ProductNumber }= useContext(CartContext)
  return (
    <>
    {cart.lenght === 0?( 
    <ShoppingCartOutlinedIcon />
    ) : (
      <>
     <ShoppingCartOutlinedIcon />
   <span>{ProductNumber()}</span>
  </>
     ) } </>
  )
  
}
export default Cartwidget