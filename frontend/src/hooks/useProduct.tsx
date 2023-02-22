import {useQuery} from "@tanstack/react-query";
import {getProducts} from "../services/product";

export const useProduct =() =>{
    return useQuery(['product'], getProducts)
}