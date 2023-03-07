import { GiShoppingCart } from 'react-icons/Gi';
import "./cartwidget.css"
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';




function Cartwidget() {
    return (
        <div >
            <Button color="inherit" variant="text" startIcon={<ShoppingCartOutlinedIcon />}> 12

            </Button>     
          
        </div>
    );
}

export default Cartwidget