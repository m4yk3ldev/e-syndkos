import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Skeleton, CircularProgress } from "@mui/material";
import { IProduct } from "../../interfaces/products";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

interface Props {
    product: IProduct,
    isCart: boolean
}

const ProductCard: FC<Props> = ({ product: productProps, isCart }) => {
    const [product, setProduct] = useState<IProduct>(productProps)
    const { addToCart, removeFromCart } = useCart()

    return (
        <>
            {

                product ? (
                    <Card sx={{ maxWidth: 345 }} >
                        <CardActionArea>
                            <Link to={`/product/${product.id}`}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                />
                            </Link>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ maxHeight: 200, minHeight: 100 }}>
                                    {product.description}
                                </Typography>
                                <Typography gutterBottom variant="h4" component="h4">
                                    $ {product.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => { isCart ? removeFromCart(product) : addToCart(product) }} >
                                {isCart ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
                            </Button>
                        </CardActions>
                    </Card >
                ) : (
                    <>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardActionArea sx={{ display: "flex", placeItems: "center" }}>
                                <CircularProgress />
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" disabled>
                                    Comprar
                                </Button>

                            </CardActions>
                        </Card >
                    </>
                )
            }
        </>
    );
}


export default ProductCard;