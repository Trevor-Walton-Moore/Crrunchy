import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../store/product';
import { fetchCreateOrder, fetchOneOrder, fetchUpdateOrder } from '../store/order';
import './css/Product.css'

const Product = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const { productId } = useParams();

    const user = useSelector(state => state.session.user);
    const product = useSelector(state => state.product[productId]);
    const orderObj = useSelector(state => state.order);
    const isOrder = useSelector(state => state.order?.order);
    // const orderId = isOrder?.id

    const [quantity, setQuantity] = useState('');

    console.log('quantoty?!?!?', quantity)
    console.log('order OBJ', orderObj)

    // useEffect(() => {

    //     dispatch(fetchOneOrder(user?.id));
    //     dispatch(fetchAllProducts());

    // }, [dispatch, user?.id]);

    // useEffect(() => {

        // dispatch(fetchOneOrder(user?.id));
        // dispatch(fetchAllProducts());

    // }, [dispatch]);

    useEffect(() => {
        // console.log('hellooooooo?????', orderObj)
        if (orderObj && Object.values(orderObj).length > 0) {
            const productInOrderProducts = []
            if (orderObj?.order && Object.values(orderObj?.order).length > 0) {
                // console.log('wuuuuuut')
                if (orderObj?.order?.orderProducts && Object.values(orderObj?.order?.orderProducts).length > 0) {

                    Object.values(orderObj?.order?.orderProducts).forEach(product => {
                        console.log('orderProduct.productId ', +product.productId === +productId, "productId???")
                        if (+product.productId === +productId) {
                            productInOrderProducts.push(product)
                            console.log('just opush product to rray: ', productInOrderProducts)
                        }
                        else return null
                    })
                    console.log('productInOrderProducts', productInOrderProducts)
                    if (productInOrderProducts) setQuantity(productInOrderProducts[0]?.quantity)
                    // setQuantity(orderObj?.order?.orderProducts[productId]?.quantity)
                }
            }
        }
    }, [JSON.stringify(orderObj)]);

    if (!product) {
        return null;
    }

    const handleAddToCart = () => {

        if (!user) {
            return history.push('/login')
        }

        if (isOrder?.id) {
            console.log('the order was not empty O_o')
            if (quantity) {
                let updatedOrder = {
                    orderId: isOrder?.id,
                    productId,
                    quantity: quantity + 1
                }
                console.log('there is a quantity O_o')
                dispatch(fetchUpdateOrder(updatedOrder))
            }
            else {
                console.log('there is not a quantity O_o')
                let updatedOrder = {
                    orderId: isOrder?.id,
                    productId,
                    quantity: 1
                }
                dispatch(fetchUpdateOrder(updatedOrder))
            }
        }
        else {
            console.log('the order was empty O_o')
            dispatch(fetchCreateOrder(productId))
            dispatch(fetchOneOrder(user?.id))
        };
    }

    return (
        // (sessionUser) &&
        <div className="product-page-container">
            <div>
                <div className="product-page-image-container">
                    <img
                        src={product.productImage}
                        className='product-page-image'
                        alt='preview' />
                </div>
            </div>
            <div className=''>
                <div className='product-page-name'>
                    {product.name}
                </div>
                <div className='product-price'>
                    ${product.price}
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
            </div>
        </div>
    );
};

export default Product;
