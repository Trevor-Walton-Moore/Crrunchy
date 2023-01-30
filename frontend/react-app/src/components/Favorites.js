import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../store/product';
import { fetchRemoveFromFavorites } from '../store/session';
import { fetchCreateOrder, fetchOneOrder, fetchUpdateOrder } from '../store/order';
import './css/Product.css'
import './css/Favorites.css'

const Favorites = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user);
    // const product = useSelector(state => state.product[productId]);
    const orderObj = useSelector(state => state.order);
    const isOrder = useSelector(state => state.order?.order);

    !user && history.push('/login')

    const noFavorites = 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1675108776/Crunchy%20images/emptydogbowl_qke7ym.webp'

    const handleRemoveFavorite = (productId) => {
        dispatch(fetchRemoveFromFavorites(productId))
    }

    const handleAddToCart = (product) => {

        if (!user) {
            return history.push('/login')
        }

        if (isOrder?.userId === user?.id) {

            let order = 0
            Object.values(isOrder?.orderProducts).map((orderProduct) => {
                return orderProduct.productId === product.id ? order = orderProduct : null
            });

            console.log('prder in handle add to cart', order)

            if (order?.quantity) {
                let updatedOrder = {
                    orderId: isOrder?.id,
                    productId: product.id,
                    quantity: order.quantity + 1
                }
                dispatch(fetchUpdateOrder(updatedOrder))
            }
            else {
                let updatedOrder = {
                    orderId: isOrder?.id,
                    productId: product.id,
                    quantity: 1
                }
                dispatch(fetchUpdateOrder(updatedOrder))
            }
        }
        else {
            dispatch(fetchCreateOrder(product.id))
            dispatch(fetchOneOrder(user?.id))
        };
    }

    return (
        <main className="favorites-main">

            {user?.favorites.length ?
                (<div className='favorites-container'>
                    <div className='favorites-text'>Favorites</div>
                    {Object.values(user.favorites).map((product) => {
                        return (
                            <div className='favorite-container'>
                                <NavLink
                                    key={product.id}
                                    to={`/products/${product.id}`}
                                    className="">
                                    <div className='favorite-image-container'>
                                        <img
                                            className='product-image'
                                            src={product?.productImage}
                                            alt='preview' />
                                    </div>
                                </NavLink>
                                <div className='favorite-details'>
                                    <NavLink
                                        key={product.id}
                                        to={`/products/${product.id}`}
                                        className="product-name-link">
                                        {product.name}
                                    </NavLink>
                                    <div className='favorite-price'>
                                        ${product.price}
                                    </div>
                                    <div className='add-favorite-to-cart'
                                        onClick={() => handleAddToCart(product)}
                                    >Add to Cart</div>
                                </div>
                                <i class="fa-solid fa-xmark remove-favorite-x"
                                    onClick={() => handleRemoveFavorite(product.id)} />
                            </div>
                        );
                    })}
                </div>)
                :
                <div className='no-favorites'>
                    <div className='no-favorites-image-container'>
                                <img
                                    className='coming-soon-image'
                                    src={noFavorites}
                                    alt='sniffing dog' />
                            </div>
                    <div className='no-results-text'>
                        <div className='oops oops-no-results'>
                            No Favorite Items
                        </div>
                        <div>
                        Look for the heart to save favorites while you shop.
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
            }
        </main>
    );
};

export default Favorites;
