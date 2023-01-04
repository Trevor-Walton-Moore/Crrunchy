import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../store/product';
import { fetchCreateOrder, fetchOneOrder, fetchUpdateOrder } from '../store/order';

const Product = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const { productId } = useParams();

    const user = useSelector(state => state.session.user);
    const product = useSelector(state => state.product[productId]);
    const orderObj = useSelector(state => state.order);
    const isOrder = useSelector(state => state.order?.order);
    const orderId = isOrder?.id

    const [quantity, setQuantity] = useState('');
    // const quantity = isOrder?.order?.orderProducts[productId]?.quantity

    console.log('quantoty?!?!?', quantity)

    // const productsObj = useSelector(state => state.product);

    useEffect(() => {

        dispatch(fetchOneOrder(user?.id));
        dispatch(fetchAllProducts());

        if (orderObj && Object.values(orderObj).length > 0) {
            const productInOrderProducts = []
            Object.values(orderObj?.order?.orderProducts).forEach(product => {
                // console.log('orderProduct.productId ', +product.productId === +productId, "productId???")
                if (+product.productId === +productId) {
                    productInOrderProducts.push(product)
                    // console.log('just opush product to rray: ', productInOrderProducts)
                }
                else return null
            })
            // console.log('productInOrderProducts', productInOrderProducts)
            if (productInOrderProducts) setQuantity(productInOrderProducts[0]?.quantity)
            // setQuantity(orderObj?.order?.orderProducts[productId]?.quantity)
        }
    }, [dispatch, user?.id, JSON.stringify(orderObj)]);

    if (!product) {
        return null;
    }

    const handleAddToCart = () => {

        if (orderId) {
            console.log('the order was not empty O_o')
            if (quantity) {
                let updatedOrder = {
                    orderId,
                    productId,
                    quantity: quantity + 1
                }
                console.log('there is a quantity O_o')
                dispatch(fetchUpdateOrder(updatedOrder))
            }
            else {
                console.log('there is not a quantity O_o')
                let updatedOrder = {
                    orderId,
                    productId,
                    quantity: 1
                }
                dispatch(fetchUpdateOrder(updatedOrder))
            }
        }
        else {
            console.log('the order was empty O_o')
            dispatch(fetchCreateOrder(productId))
        };
    }

    return (
        // (sessionUser) &&
        <div className="">
            <div>
                <div className="">
                    <img
                        src={product.productImage}
                        className=''
                        alt='preview' />
                </div>
                <div className=''>
                    <div className=''>
                        {product.name}
                    </div>
                </div>
                <div>
                </div>
            </div>
            <NavLink
                to='/cart'
                onClick={handleAddToCart}
                className='add-to-cart'>
                Add to Cart
            </NavLink>
        </div>
    );
};

export default Product;
