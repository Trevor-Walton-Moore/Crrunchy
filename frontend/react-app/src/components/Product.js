import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../store/product';
import { fetchAddToFavorites, fetchRemoveFromFavorites } from '../store/session';
import { fetchCreateOrder, fetchOneOrder, fetchUpdateOrder } from '../store/order';
import './css/Product.css'
import './css/Favorites.css'

const Product = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const { productId } = useParams();

    const user = useSelector(state => state.session.user);
    const product = useSelector(state => state.product[productId]);
    const orderObj = useSelector(state => state.order);
    const isOrder = useSelector(state => state.order?.order);

    const [quantity, setQuantity] = useState('');
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {

        user?.favorites.map((product) => {
            return product.id === +productId ? setIsFavorited(true) : null
        });

    }, [user?.favorites]);

    console.log('isFavorited after use effect', isFavorited)

    useEffect(() => {

        dispatch(fetchAllProducts());

    }, [dispatch]);

    useEffect(() => {
        if (orderObj && Object.values(orderObj).length > 0) {
            const productInOrderProducts = []
            if (orderObj?.order && Object.values(orderObj?.order).length > 0) {
                if (orderObj?.order?.orderProducts && Object.values(orderObj?.order?.orderProducts).length > 0) {

                    Object.values(orderObj?.order?.orderProducts).forEach(product => {
                        if (+product.productId === +productId) {
                            productInOrderProducts.push(product)
                        }
                        else return null
                    })
                    if (productInOrderProducts) setQuantity(productInOrderProducts[0]?.quantity)
                }
            }
        }
    }, [JSON.stringify(orderObj)]);

    if (!product) {
        return null;
    }

    const handleFavorite = () => {
        isFavorited ?
            dispatch(fetchRemoveFromFavorites(productId)) :
            dispatch(fetchAddToFavorites(productId))
        setIsFavorited(!isFavorited)
    }

    const handleAddToCart = () => {

        if (!user) {
            return history.push('/login')
        }

        if (isOrder?.userId === user?.id) {
            if (quantity) {
                let updatedOrder = {
                    orderId: isOrder?.id,
                    productId,
                    quantity: quantity + 1
                }
                dispatch(fetchUpdateOrder(updatedOrder))
            }
            else {
                let updatedOrder = {
                    orderId: isOrder?.id,
                    productId,
                    quantity: 1
                }
                dispatch(fetchUpdateOrder(updatedOrder))
            }
        }
        else {
            dispatch(fetchCreateOrder(productId))
            dispatch(fetchOneOrder(user?.id))
        };
    }

    return (
        // (sessionUser) &&
        <div className="product-page-container">
            <div className="product-page-image-container">
                <img
                    src={product.productImage}
                    className='product-page-image'
                    alt='preview' />
            </div>
            <div className='favorite-circle'
                onClick={handleFavorite}>
                {isFavorited ?
                    <i class="fa-solid fa-heart" /> :
                    <i class="fa-regular fa-heart" />}

            </div>
            <div className='product-details-container'>
                <div className='product-page-name'>
                    {product.name}
                </div>
                <div className='product-price product-page-price'>
                    ${product.price}
                </div>
                <div className='product-page-description'>
                    {product.description}
                </div>
            </div>
            <div className='add-to-cart-container'>
                <div className='in-stock'>
                    In Stock
                </div>
                <NavLink
                    onClick={handleAddToCart}
                    to='/cart'
                    className='add-to-cart-link'>
                    <div
                        className='add-to-cart-button'>
                        Add to Cart
                    </div>
                </NavLink>
                <NavLink
                    to="/coming-soon"
                    className='autoship-link'>
                    <div
                        className='autoship-button'>
                        Start&nbsp;
                        {/* <div className='autoship' /> */}
                        Autoship
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Product;
