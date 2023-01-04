import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchAllProducts } from '../store/product';
import { fetchOneOrder } from '../store/order';
import './css/home.css'

const Home = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const productsObj = useSelector((state) => state.product);

    // console.log('productproductproductsss', productsObj)

    useEffect(() => {
        dispatch(fetchOneOrder(user?.id));
        dispatch(fetchAllProducts());
    }, [dispatch, user?.id]);

    if (!productsObj) {
        return null;
    }

    const banner = 'https://cms-www.chewy.com/contentAsset/image/7e36af75-647d-41bc-911e-37a4af39a202/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/2050/resize_h/592/2022-12-Holiday-P4-EOSS-HP-Hero-MEDIUM-EOSS.jpg'

    return (
        <main clasname="">
            <div>
                <img
                    className='banner'
                    src={banner}
                    alt='preview' />
                <div className='products'>
                    {Object.values(productsObj).map((product) => {
                        return (
                            <div className='product-container'>
                                <NavLink
                                    key={product.id}
                                    to={`/products/${product.id}`}
                                    className="">
                                    <div className='product-image-container'>
                                        <img
                                            className='product-image'
                                            src={product?.productImage}
                                            alt='preview' />
                                    </div>
                                </NavLink>
                                <div className='product-details'>
                                    <NavLink
                                        key={product.id}
                                        to={`/products/${product.id}`}
                                        className="product-name-link">
                                        {product.name}
                                    </NavLink>
                                    <div className='product-price'>
                                        ${product.price}
                                    </div>
                                    <div className='shipping'>
                                        FREE 1-3 day shipping over $49
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Home;
