// import {products} from '../mocks/products.json'
import {IProduct} from "../interfaces/products";

export const getProducts = async (): Promise<IProduct[]> => {
    const resp = await fetch("http://localhost:8000/api/product/");
    return await resp.json() as Promise<IProduct[]>;
}