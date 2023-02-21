import { FC } from "react";
import ProductCard from "../Product/Product";

import "./Products.css"
import { Container } from "@mui/material";
import { getProducts } from "../../services/product";
import { IProduct } from "../../interfaces/products";
import { useFilters } from "../../hooks/useFilters";
import { useCart } from "../../hooks/useCart";

const Products: FC = () => {
    const products: IProduct[] = getProducts()
    const { filterProducts } = useFilters()
    const filteredProducts = filterProducts(getProducts())

    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => cart.some(item => item.id === product.id)
    return (
        <Container className="products">
            <ul className="products_list">
                {filteredProducts && products.map(product => <ProductCard key={product.id} product={product} isCart={checkProductInCart(product)} />)}
            </ul>
        </Container>
    )
}

export default Products