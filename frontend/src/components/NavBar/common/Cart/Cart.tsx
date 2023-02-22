import { FC, useState } from "react"
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "../../../../hooks/useCart";
import DrawerShoppingCart from "./drawerShoppingCart";

const Cart: FC = () => {
    const { cart } = useCart()
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleToggleCartDrawer = () => {
        setOpenDrawer(!openDrawer)
    }
    return (
        <>
            <MenuItem>
                <IconButton size="large" aria-label={`show ${cart.length} products in cart`} color="inherit" onClick={handleToggleCartDrawer}>
                    <Badge badgeContent={cart.length} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </MenuItem>
            <DrawerShoppingCart open={openDrawer} toggle={handleToggleCartDrawer} />
        </>
    )
}

export default Cart