import { NavLink } from 'react-router-dom';
import './css/Cart.css'

const ComingSoon = () => {

    return (
        <div className='empty-cart-container'>
            <div className='coming-soon-image-container'>
                <img
                    className='coming-soon-image'
                    src={'https://res.cloudinary.com/dfrj03hsi/image/upload/v1673212892/Crunchy%20images/oops_por3f4.png'}
                    alt='doggo' />
            </div>
            <div>
                <div className='oops'>
                    Feature coming soon!
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

export default ComingSoon;
