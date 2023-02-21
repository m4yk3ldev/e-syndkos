import { FC } from 'react'
import { useFilters } from '../../hooks/useFilters'
import './Footer.css'

const Footer: FC = () => {
    const { filters } = useFilters()

    return (
        <footer className='footer'>
            {filters.category}
            {filters.minPrice}
        </footer>
    )
}


export default Footer