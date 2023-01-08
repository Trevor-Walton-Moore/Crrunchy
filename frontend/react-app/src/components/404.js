import { NavLink } from 'react-router-dom';
import './css/Cart.css'

const NotFound = () => {

    return (
        <div className='empty-cart-container'>
            <div className='the-404-image-container'>
                <img
                    className='the-404-image'
                    src={'https://res.cloudinary.com/dfrj03hsi/image/upload/v1673212936/Crunchy%20images/404_r3hpj5.png'}
                    alt='doggo' />
            </div>
            <div>
                <div className='oops'>
                    404
                </div>
                <div style={{"width": "400px"}}>
                Sorry, but we have encountered an error while trying to process your request.
                </div>
                <div className='continue-shopping-div'>
                    <NavLink
                        className='continue-shopping-link'
                        to='/'>
                        Continue Shopping
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
