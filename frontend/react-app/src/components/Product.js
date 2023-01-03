import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



const Product = () => {

    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);

    const { productId } = useParams();


    const product = useSelector(state => state.product[productId]);

    return (
        // (sessionUser) &&
        <div className="">
            <div>
                <div className="">
                    <div className=''>
                        <div className=''>
                            {product.name}
                        </div>
                    </div>
                    <div>
                        <img
                            src={product.productImage}
                            className=''
                            alt='preview' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
