import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneOrder, fetchUpdateOrder, fetchDeleteOrder } from '../store/order';

const Cart = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    // const { productId } = useParams();

    const user = useSelector(state => state.session.user);
    // const product = useSelector(state => state.product[productId]);
    // const productsObj = useSelector(state => state.product);
    const order = useSelector(state => state.order);
    console.log('UMMMMMMMMmmmmmmmmmmmmmm', order)

    useEffect(() => {
        // dispatch(fetchAllProducts());
        dispatch(fetchOneOrder(user?.id));
    }, [dispatch]);

    if (!order) {
        return null;
    }

    // const handleAddToCart = () => {
    //     dispatch(fetchCreateOrder(productId))
    // }


    return (
        <div className="">
            <div>
                {order.userId}
            </div>
            <div>
                jhey
            </div>
        </div>
    );
};

export default Cart;
