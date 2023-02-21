import { useContext } from 'react'
import { FiltersContext, IFilter } from '../context/filter'
import { IProduct } from '../interfaces/products'

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext) as IFilter

    const filterProducts = (products: IProduct[]) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })
    }

    return { filters, filterProducts, setFilters }
}
