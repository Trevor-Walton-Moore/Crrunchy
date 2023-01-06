import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneOrder, fetchUpdateOrder, fetchDeleteOrder } from '../store/order';
import { fetchAllProducts } from '../store/product';
import './css/Cart.css'

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

    if (orderObj?.order && orderObj?.order?.userId !== user?.id) {
        history.push('/')
    }

    const [orderProducts, setOrderProducts] = useState({});
    // const [subtotal, setSubtotal] = useState('');

    console.log('UMMMMMMMMmmmmmmmmmmmmmm order product', orderProducts)
    console.log('UMMMMMMMMmmmmmmmmmmmmmm order objec', orderObj)

    if (!user) {
        history.push('/login')
    }

    const filteredProducts = []

    let subtotal = 0;
    let totalItems = 0;

    if (orderObj && Object.values(orderObj).length > 0) {

        for (let i = 1; i < Object.values(allProductsObj).length + 1; i++) {
            let product = allProductsObj[i];

            if (orderProducts && Object.values(orderProducts).length > 0) {
                for (let j = 1; j < Object.values(orderProducts)?.length + 1; j++) {
                    let orderProduct = orderProducts[j];
                    if (orderProduct.productId === product.id) {
                        filteredProducts.push(product)
                        console.log('orderproduct', orderProduct, 'product.price', product.price, 'orderProduct.quantity', orderProduct.quantity)
                        subtotal += (product.price * orderProduct.quantity)
                        totalItems += orderProduct.quantity
                    }
                }
            }
        }
        // setSubtotal(total)
    }

    // console.log('filtered products :D', filteredProducts)

    // console.log('TOTALLLL', +total)

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
        history.push('/')
    }

    return (
        <div className='cart-background'>
            {/* <div className=""> */}
            {filteredProducts.length ? (

                <div className='cart-container'>
                    <div className='cart-product-container'>
                        <div className='cart-product-header'>
                            Shopping Cart
                        </div>
                        <div className='cart-product-list'>
                            {
                                filteredProducts.map((product) => {
                                    return (
                                        <div className='cart-product'
                                            key={product.id}>
                                            <div className='cart-product-image-container'>
                                                <NavLink
                                                    to={`/products/${product.id}`}>
                                                    <img
                                                        className='cart-product-image'
                                                        src={product?.productImage}
                                                        alt='product' />
                                                </NavLink>
                                            </div>
                                            <div className='cart-product-right-side'>
                                                <NavLink
                                                    className='product-name-link'
                                                    to={`/products/${product.id}`}>
                                                    {product.name}
                                                </NavLink>
                                                <div className='product-price'>
                                                    ${product.price}
                                                </div>
                                                <div className='quantity-container'>
                                                    <div className='quantityMinusSymbol'
                                                        onClick={() => handleDecreaseQuantityInCart(product)}>
                                                        -
                                                    </div>
                                                    <div className='quantity'>
                                                        {quantify(product.id)}
                                                    </div>
                                                    <div className='quantityPlusSymbol'
                                                        onClick={() => handleIncreaseQuantityInCart(product)}>
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='place-order-container'>
                        <div className='subtotal'>
                            Subtotal
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {subtotal.toFixed(2)}
                        </div>
                        <div className='total-items'>
                            {totalItems}&nbsp;Items
                        </div>
                        <div className='checkout-shipping'>
                            Tax & shipping is on the house!
                        </div>
                        <div className='place-order-button'
                            onClick={() => handleDeleteOrder(orderObj?.order?.id)}>
                            Place Order
                        </div>
                    </div>
                </div>
            ) :
                <div className='empty-cart-container'>
                    <div className='dog-in-box-image-container'>
                        <img
                            className='dog-in-box-image'
                            src={'https://res.cloudinary.com/dfrj03hsi/image/upload/v1672905198/Crunchy%20images/dog-in-box_akinfp.jpg'}
                            alt='doggo' />
                    </div>
                    <div>
                        <div className='oops'>
                            Oops!
                        </div>
                        <div>
                            Your cart is empty! Let's fix that...
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
            {/* <div>
            </div> */}
        </div >
    );
};

export default Cart;
