import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import { fetchOnePet } from '../store/pet';
import UserDropdown from './UserDropdown';
import './css/NavBar.css'
import './css/Search.css'
import { fetchAllProducts } from '../store/product';
import SearchResults from './SearchResults';

const NavBar = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user);
  const products = useSelector(state => state.product);
  const pet = useSelector((state) => state.pet);

  console.log('products obj', products)
  let productsArr = Object.values(products);

  const [searchInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [productsArrState, setProductsArrState] = useState(productsArr);

  console.log(productsArr, "ProductsARRRAY")

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  useEffect(() => {
    if (!showDropdown) { return }
    const closeDropdown = () => {
      setShowDropdown(false);
    };

    document.addEventListener('click', closeDropdown);

    return () => document.removeEventListener("click", closeDropdown);
  }, [showDropdown]);

  const displayDropdown = () => {
    if (showDropdown) return
    else setShowDropdown(true)
  };

  const updateSearchInputAndDropdown = (e) => {
    setSearchInput(e.target.value)
    setProductsArrState(productsArr.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase())))
    // console.log('product search matches!!!!!!!!!', productsArr);
  }
  // console.log('did the update work?', productsArrState)

  const fetchSearchResults = async (e) => {
    e.preventDefault()

    if (!searchInput) return null

    else {
      // console.log('should fetch search')
      const search = await fetch(`/api/products/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ search: searchInput })
      })
      const res = await search.json();
      const searchResults = res?.products;
      console.log('products found?', searchResults);

      history.push({
        state: {
          searchResults: searchResults,
          searchInput: searchInput
        },
        pathname: '/search'
      })


      setShowDropdown(false)
      setSearchInput("")
    }
  }

  return (
    <nav className='NavBar'>
      {/* <div> */}
      <div>
        <NavLink to='/' exact={true} className='crunchy'>
          Crunchy
        </NavLink>
      </div>
      <div className='search-form-container'>
        <form onSubmit={fetchSearchResults} className='search-message-form-form'>

          <input
            onClick={displayDropdown}
            className='search-message-form-input-container'
            // type="submit"
            value={searchInput}
            onChange={updateSearchInputAndDropdown}
            placeholder={`Search`}
          />


        </form>
        {showDropdown && (
          <div className='search-dropdown'>
            {
              productsArrState.map(product => {
                return (
                  <div
                    key={product.id}
                    onClick={() => history.push(`/products/${product.id}`)}
                    className='search-result'>
                    {product.name}
                  </div>
                )
              })
            }
          </div>
        )}
      </div>



      <div className='account-cart'>
        <div>
          <UserDropdown />
        </div>

        {user?.id ?
          <NavLink to='/cart'
            className='cart-button'>
            <i class="fa-solid fa-cart-shopping" />
            &nbsp;&nbsp;&nbsp;cart
            <div className='dropdown-arrow'>
              <i class="fa-solid fa-chevron-down" />
            </div>
          </NavLink>
          :
          <NavLink to='/login'
            className='cart-button'>
            <i class="fa-solid fa-cart-shopping" />
            &nbsp;&nbsp;&nbsp;cart
            <div className='dropdown-arrow'>
              <i class="fa-solid fa-chevron-down" />
            </div>
          </NavLink>
        }
      </div>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
