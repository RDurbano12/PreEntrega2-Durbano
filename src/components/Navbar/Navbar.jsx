

import Cartwidget from "../CartWidget/Cartwidget";
import "./navbar.css";
import Button from '@mui/material/Button';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from "react-router-dom";


const Navbar = () => {
  


  return (
    <nav className="container_nav">
      <img className="imgLogo" src="../multimedia/logo.png"></img>
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
      <Link to="terapiasManuales" className="color">
      <Button color="inherit" variant="text" startIcon={<MedicalInformationIcon />}>
        Terapias Manuales
      </Button>
      </Link>
      <Link to="terapiaAparatologia" className="color">
      <Button color="inherit" variant="text" startIcon={<MedicalInformationIcon />}>
      Terapias Con Aparatologias
      </Button>
      </Link>
      {/* <Button color="inherit" variant="text" startIcon={<GroupIcon />}>
        Terapias Con Aparatologias
      </Button> */}
      {/* <Button color="inherit" variant="text" endIcon={<FmdGoodIcon />}>
        Sedes
      </Button> */}
      <Button color="inherit" variant="text" endIcon={<ContactMailSharpIcon />}>
        Contacto
      </Button>
      <Cartwidget />
    </nav>
  )
}

export default Navbar