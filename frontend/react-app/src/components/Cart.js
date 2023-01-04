import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneOrder, fetchUpdateOrder, fetchDeleteOrder } from '../store/order';
import { fetchAllProducts } from '../store/product';

const Cart = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    // const { productId } = useParams();

    const user = useSelector(state => state.session.user);
    // const product = useSelector(state => state.product[productId]);
    const allProductsObj = useSelector(state => state.product);
    const orderObj = useSelector(state => state.order);
    // const order = orderObj?.order;
    // const orderProducts = order?.orderProducts;

    const [orderProducts, setOrderProducts] = useState({});

    console.log('UMMMMMMMMmmmmmmmmmmmmmm order product', orderProducts)
    console.log('UMMMMMMMMmmmmmmmmmmmmmm order objec', orderObj)

    const filteredProducts = []

    if (orderObj && Object.values(orderObj).length > 0) {

        for (let i = 1; i < Object.values(allProductsObj).length + 1; i++) {
            let product = allProductsObj[i];

            if (orderProducts && Object.values(orderProducts).length > 0) {
                for (let j = 1; j < Object.values(orderProducts)?.length + 1; j++) {
                    let orderProduct = orderProducts[j];
                    if (orderProduct.productId === product.id) filteredProducts.push(product)
                }
            }
        }
    }

    console.log('filtered products :D', filteredProducts)

    const quantify = (productId) => {
        console.log('quantifying, productId: ', productId)
        console.log('quantifying, orderObj: ', orderObj)
        if (!orderObj || !Object.values(orderObj).length > 0) return null

        let quantity = '';

        if (orderObj.orderProducts && Object.values(orderObj.orderProducts).length > 0) {

            Object.values(orderObj?.orderProducts).forEach(product => {
                if (+product.productId === +productId) {
                    console.log('product.quantity', product.quantity)
                    quantity = product.quantity
                }
            })
        }

        else if (orderObj.order.orderProducts && Object.values(orderObj.order.orderProducts).length > 0) {
            Object.values(orderObj?.order?.orderProducts).forEach(product => {

                if (+product.productId === +productId) {
                    console.log('product.quantity', product.quantity)
                    quantity = product.quantity
                }
            })
        }
        return quantity
    }

    useEffect(() => {

        dispatch(fetchAllProducts());
        dispatch(fetchOneOrder(user?.id));

        if (orderObj && Object.values(orderObj).length > 0) {
            setOrderProducts(orderObj?.order?.orderProducts)
        }

    }, [dispatch, user?.id, JSON.stringify(orderObj)]);


    const handleIncreaseQuantityInCart = (updateProduct) => {

        let updatedOrder = {
            orderId: orderObj?.order.id,
            productId: updateProduct.id,
            quantity: quantify(updateProduct.id) + 1
        }
        console.log('adding more to cart O_o, updatedOrder: ', updatedOrder)
        dispatch(fetchUpdateOrder(updatedOrder))
    }

    const handleDecreaseQuantityInCart = (updateProduct) => {

        let updatedOrder = {
            orderId: orderObj?.order.id,
            productId: updateProduct.id,
            quantity: quantify(updateProduct.id) - 1
        }
        console.log('decreasing quantity in cart O_o, updatedOrder: ', updatedOrder)
        dispatch(fetchUpdateOrder(updatedOrder))
    }

    const handleDeleteOrder = (orderId) => {
        console.log('order id to delete order :}', orderId)
        dispatch(fetchDeleteOrder(orderId))
        
    }

    return (
        <div className="">
            {filteredProducts &&
                filteredProducts.map((product) => {
                    return (
                        <div>
                            <div
                            onClick={() => handleDeleteOrder(orderObj?.order?.id)}
                            >proceed to checkout</div>

                            <NavLink
                                key={product.id}
                                to={`/products/${product.id}`}
                                className=''>
                                <div className='cart-product'>
                                    <img className='' src={product?.productImage} alt='product'></img>
                                </div>
                                <div>
                                    {product.name}
                                </div>
                            </NavLink>
                            <span
                                onClick={() => handleDecreaseQuantityInCart(product)}>
                                -</span>
                            <span>
                                {quantify(product.id)}
                            </span>
                            <span
                                onClick={() => handleIncreaseQuantityInCart(product)}>
                                +</span>
                        </div>
                    );
                })}
        </div>
    );
};

export default Cart;
