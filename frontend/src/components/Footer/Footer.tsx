import {FC} from 'react'
import {useFilters} from '../../hooks/useFilters'
import './Footer.css'
import {useCart} from "../../hooks/useCart";

const Footer: FC = () => {
    const {filters} = useFilters()
    const {cart} = useCart()

    return (
        <footer className='footer'>
            {`${JSON.stringify(filters)}`}
            <br/>
            {`${JSON.stringify(cart)}`}
        </footer>
    )
}


export default Footer