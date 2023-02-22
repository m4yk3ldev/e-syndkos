import {FC, useEffect, useState} from "react";
import ProductCard from "../Product/Product";

import "./Products.css"
import {Container} from "@mui/material";
import {getProducts} from "../../services/product";
import {IProduct} from "../../interfaces/products";
import {useFilters} from "../../hooks/useFilters";
import {useCart} from "../../hooks/useCart";
import {useProduct} from "../../hooks/useProduct";
import filter from "../../context/filter";

const Products: FC = () => {
    const {isLoading, isFetching, data} = useProduct()
    const {filterProducts} = useFilters()
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        console.log(data)
        if (isLoading) {
            setProducts(filterProducts(data))
        }
    }, [data])

    const {cart} = useCart()
    const checkProductInCart = product => cart.some(item => item.id === product.id)
    // const checkProductInCart= false
    return (
        <Container className="products">
            {data?.length == 0 ? (
                <div className="loader">
                    <div className="loader-inner"></div>
                </div>
            ) : (
                <ul className="products_list">
                    {products && products.map(product => <ProductCard key={product.id} product={product}
                                                                      isCart={checkProductInCart(product)}/>)}
                </ul>
            )

            }
        </Container>
    )
}

export default Products