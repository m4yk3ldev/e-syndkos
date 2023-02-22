import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import { FC } from "react"
import { Link } from "react-router-dom";
import { IProduct } from "../../../../interfaces/products";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
interface Props {
    product: IProduct;
    addToCart: () => void;
    removeFromCart: () => void;
}

const CartItem: FC<Props> = ({ product, addToCart, removeFromCart }) => {
    return (
        <Card sx={{ maxWidth: 345, my: "15px" }} >
            <CardActionArea sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", alignContent: "center" }}>
                <Link to={`/product/${product.id}`}>
                    <CardMedia
                        component="img"
                        image={product.images.at(0)}
                        alt={product.title}
                        loading="lazy"
                        sx={{ height: "150px", width: "150px", objectFit: "scale-down" }}
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                        $ {product.price} X {product.quantity}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <RemoveShoppingCartIcon onClick={() => removeFromCart()} />
                <AddShoppingCartIcon onClick={() => addToCart()} />
            </CardActions>
        </Card >
    )
}

export default CartItem