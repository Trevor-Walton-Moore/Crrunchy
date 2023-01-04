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
    const order = orderObj?.order;
    const orderProducts = order?.orderProducts;
    console.log('UMMMMMMMMmmmmmmmmmmmmmm allproduct objec', orderProducts)

    const filteredProducts = Object.values(allProductsObj).filter(product => {
        // console.log('ehh', product.id)
        return orderProducts[product.id]
    })

    // const filteredProducts = []

    // for (let i = 0; i < Object.values(orderProducts).length; i++) {
    //     let orderProduct = orderProducts[i]

    //     for (let productId in allProductsObj) {
    //         console.log('weeeee', productId)
    //         if (productId === orderProduct.product_id) {
    //             filteredProducts.push(allProductsObj[productId])
    //         }
    //     }
    // }

    console.log('UMMMMMMMMmmmmmmmmmmmmmm', filteredProducts)

    useEffect(() => {
        dispatch(fetchOneOrder(user?.id));
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (!order) {
        return null;
    }

    // const handleAddToCart = () => {
    //     dispatch(fetchCreateOrder(productId))
    // }


    return (
        <div className="">
            {filteredProducts.map((product) => {
                        return (
                            <NavLink key={product.id} to={`/products/${product.id}`} className=''>
                                <div className='cart-product'>
                                    <img className='' src={product?.productImage} alt='product'></img>
                                </div>
                            </NavLink>
                        );
                    })}
        </div>
    );
};

export default Cart;
