import {useEffect, useState, FC} from "react";
import {Box, ButtonBase, Typography, Alert, Button} from "@mui/material";
import {Close as CloseIcon} from "@mui/icons-material";
import {useCart} from "../../../../hooks/useCart";
import {StyledSwipeableDrawer, StyledDrawerContainer} from "./stylesDrawerShoppingCart";
import {ClearCartIcon} from "../../../Icons/Icons";
import CartItem from "./CartItem";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

interface Props {
    open: boolean;
    toggle: () => void;
}

const DrawerShoppingCart: FC<Props> = ({open, toggle}) => {
    const [dataRecomended, setDataRecomended] = useState([]);
    const [showSkeleton, setShowSkeleton] = useState(true);
    const {cart: itemProducts, addToCart, clearCart, removeFromCart} = useCart()

    return (
        <>
            <StyledSwipeableDrawer
                anchor={"right"}
                open={open}
                onClose={() => {
                    toggle();
                }}
                onOpen={() => toggle()}
                sx={{
                    zIndex: "9999",
                }}
            >
                <StyledDrawerContainer id="id-scrollTop-drawer">
                    <Box className="paddingDrawer">
                        <Box className="topDrawer">
                            <Typography className="topDrawerText">Seu carrinho</Typography>
                            <Box className="closeIconContainer">
                                <ButtonBase sx={{padding: "2px 2px"}}>
                                    <CloseIcon
                                        sx={{cursor: "pointer"}}
                                        onClick={() => {
                                            toggle();
                                        }}
                                    />
                                </ButtonBase>
                            </Box>
                        </Box>
                        <Box className="listItemsProducts">
                            {itemProducts.length > 0 ? (
                                    itemProducts.map(
                                        (product, i) => {
                                            return (
                                                <div key={i + 1}>
                                                    <CartItem
                                                        key={product.id}
                                                        product={product}
                                                        addToCart={() => addToCart(product)}
                                                        removeFromCart={() => removeFromCart(product)}
                                                    />
                                                </div>
                                            );
                                        })
                                ) :
                                <Typography component={"h2"}>
                                    Você ainda não possui nenhum produto no seu carrinho.
                                </Typography>
                            }
                        </Box>

                      <Box display={"flex"} flexWrap={"nowrap"} gap={"12px"} flexDirection={"row"}>
                          <Button type="submit" variant="contained" color="primary"
                                  sx={{display: itemProducts.length > 0 ? "inline-flex" : "none"}}>Comprar</Button>
                          <Button variant="contained" color="error" onClick={clearCart}
                                  sx={{display: itemProducts.length > 0 ? "inline-flex" : "none"}}>Limpar</Button>
                      </Box>
                    </Box>
                </StyledDrawerContainer>
            </StyledSwipeableDrawer>
        </>
    );
};

export default DrawerShoppingCart;
