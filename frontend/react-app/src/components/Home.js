import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchAllPRoducts } from '../store/product';

const Home = () => {
    const dispatch = useDispatch();

    const productsObj = useSelector((state) => state.products);

    console.log('productproductproductsss', productsObj)

    useEffect(() => {
        dispatch(fetchAllPRoducts());
    }, [dispatch]);

    if (!productsObj) {
        return null;
    }

    return (
        <main clasname="">
            <div>
                <div className=''>
                    {Object.values(productsObj).map((product) => {
                        return (
                            <NavLink
                                key={product.id}
                                to={`/products/${product.id}`}
                                className="">
                                <div className=''>
                                    <img
                                        className=''
                                        src={product?.productImage}
                                        alt='preview' />
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Home;
