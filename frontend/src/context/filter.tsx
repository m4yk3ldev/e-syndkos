import { createContext, FC, ReactNode, useState } from 'react'

interface Props {
    children: ReactNode;
}

export interface IFilter {
    filters: {
        category: string;
        minPrice: number;
    };
    setFilters: React.Dispatch<React.SetStateAction<{
        category: string;
        minPrice: number;
    }>>
}
export const FiltersContext = createContext<IFilter | null>(null)

// Este es el que nos provee de acceso al contexto
const FiltersProvider: FC<Props> = ({ children }) => {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 100
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}

export default FiltersProvider