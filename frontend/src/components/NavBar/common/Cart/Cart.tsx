import { FC, useState } from "react"
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "../../../../hooks/useCart";

const Cart: FC = () => {
    const { cart } = useCart()
    return (
        <MenuItem>
            <IconButton size="large" aria-label={`show ${cart.length} products in cart`} color="inherit">
                <Badge badgeContent={cart.length} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </MenuItem>
    )
}

export default Cart