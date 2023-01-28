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

    // useEffect(() => {
    //     // console.log('hellooooooo?????', orderObj)
    //     if (orderObj && Object.values(orderObj).length > 0) {
    //         const productInOrderProducts = []
    //         if (orderObj?.order && Object.values(orderObj?.order).length > 0) {
    //             // console.log('wuuuuuut')
    //             if (orderObj?.order?.orderProducts && Object.values(orderObj?.order?.orderProducts).length > 0) {

    //                 Object.values(orderObj?.order?.orderProducts).forEach(product => {
    //                     // console.log('orderProduct.productId ', +product.productId === +productId, "productId???")
    //                     if (+product.productId === +productId) {
    //                         productInOrderProducts.push(product)
    //                         // console.log('just opush product to rray: ', productInOrderProducts)
    //                     }
    //                     else return null
    //                 })
    //                 // console.log('productInOrderProducts', productInOrderProducts)
    //                 if (productInOrderProducts) setQuantity(productInOrderProducts[0]?.quantity)
    //                 // setQuantity(orderObj?.order?.orderProducts[productId]?.quantity)
    //             }
    //         }
    //     }
    // }, [JSON.stringify(orderObj)]);

    // if (!product) {
    //     return null;
    // }

    const handleRemoveFavorite = (productId) => {
            dispatch(fetchRemoveFromFavorites(productId))
    }

    const handleAddToCart = (product) => {

        // console.log('handle add to cart product in favorites', product)

        if (!user) {
            return history.push('/login')
        }

        if (isOrder?.userId === user?.id) {
            // console.log('the order belongs to the current user O_o')

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
                // console.log('there is a quantity O_o')
                dispatch(fetchUpdateOrder(updatedOrder))
            }
            else {
                // console.log('there is not a quantity O_o')
                let updatedOrder = {
                    orderId: isOrder?.id,
                    productId: product.id,
                    quantity: 1
                }
                dispatch(fetchUpdateOrder(updatedOrder))
            }
        }
        else {
            // console.log('the order does not belong to the current user O_o')
            dispatch(fetchCreateOrder(product.id))
            dispatch(fetchOneOrder(user?.id))
        };
    }

    return (
        // (user) &&
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
                                onClick={() => handleRemoveFavorite(product.id)}/>
                            </div>
                        );
                    })}
                </div>)
                :
                <div>
                    no favorites
                </div>
            }
        </main>
    );
};

export default Favorites;
