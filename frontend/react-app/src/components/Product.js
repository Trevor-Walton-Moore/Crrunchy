import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../store/product';

const Product = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const { productId } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    // const productsObj = useSelector(state => state.product);
    console.log('user: ', sessionUser)

    // const product = productsObj[productId]
    const product = useSelector(state => state.product[productId]);
    console.log('PRODUCT JUST ONE', product)

    useEffect(() => {
        console.log("BOUTTA DISPATCH IN THAT PRODUCT DETAIL PAGE")
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (!product) {
        return null;
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
                <div>

                </div>
            </div>
        </div>
    );
};

export default Product;
