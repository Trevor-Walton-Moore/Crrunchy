import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../store/product';
import { fetchCreateOrder } from '../store/order';

const Product = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const { productId } = useParams();

    const user = useSelector(state => state.session.user);
    const product = useSelector(state => state.product[productId]);
    // const productsObj = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (!product) {
        return null;
    }

    const handleAddToCart = () => {
        dispatch(fetchCreateOrder(productId))
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
