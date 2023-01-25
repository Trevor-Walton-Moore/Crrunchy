import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
// import { fetchAllProducts } from '../store/product';
// import { fetchOnePet } from '../store/pet';
// import { fetchOneOrder } from '../store/order';
import './css/home.css'

const SearchResults = () => {
    // const dispatch = useDispatch();
    const location = useLocation();


    const searchResults = location.state.searchResults;
    const searchInput = location.state.searchInput
    console.log('inside search component. results: ', searchResults)
    console.log('searhch input: ', searchInput)



    // const user = useSelector(state => state.session.user);
    // const productsObj = useSelector((state) => state.product);

    // console.log('user in home page', user)

    // console.log('productproductproductsss', productsObj)

    // useEffect(() => {
    //     dispatch(fetchOneOrder(user?.id));
    //     dispatch(fetchOnePet(user?.id));
    //     dispatch(fetchAllProducts());
    // }, [dispatch, user?.id]);

    // if (!productsObj) {
    //     return null;
    // }

    const sniffingDog = 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1674677141/Crunchy%20images/sniffing_dog_c2s0sl.jpg'

    return (
        <main clasname="">
            <div>
                {searchResults.length > 0 && <div style={{ 'height': '73px' }} />}
                <div className='products'>
                    <div>

                    {searchResults.length ?
                        searchResults.map((product) => {
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
                        }) :

                        <div className='no-search-results'>
                            <div className='no-results-image-container'>
                                <img
                                    className='coming-soon-image'
                                    src={sniffingDog}
                                    alt='sniffing dog' />
                            </div>
                            <div className='no-results-text'>
                                <div className='oops oops-no-results'>
                                    We couldn't sniff that out.
                                </div>
                                <span>
                                    There are no results for “
                                    <span style={{ 'font-weight': 'bold' }}>{`${searchInput}`}</span>
                                    ”.`
                                </span>
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
                    <div style={{ 'height': '94px' }} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SearchResults;
