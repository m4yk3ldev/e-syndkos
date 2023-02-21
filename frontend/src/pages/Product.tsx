import { FC, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getProducts } from "../services/product";
import { IProduct } from "../interfaces/products";

const ProductPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Products Detail | E-Syndkos"
    }, [])
    const { id } = useParams()
    const product: IProduct = getProducts().filter(({ id: idProps }) => idProps.toString() === id).at(0)
    return (
        <>
            <h1>{product.title}</h1>
            <img src={product.images.at(0)} alt={product.title} />
            <p>{product.description}</p>
        </>
    )

}
export default ProductPage