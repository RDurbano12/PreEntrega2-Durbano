

import Cartwidget from "../CartWidget/Cartwidget";
import "./navbar.css";
import Button from '@mui/material/Button';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from "react-router-dom";


const Navbar = () => {
  


  return (
    <nav className="container_nav">
      <img className="imgLogo" src="../multimedia/logo.png" />
      <Link to="/" className="color">
      <Button color="inherit" variant="text" startIcon={<HouseSidingIcon />}>
        HOME
      </Button>
      </Link>
      <Link to="terapias" className="color">
      <Button color="inherit" variant="text" startIcon={<MedicalInformationIcon />}>
        Terapias
      </Button>
      </Link>
      <Link to="carrito" className="color">
       <Cartwidget />  
      </Link>
    </nav>
  )
}

export default Navbar