import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import { fetchOnePet } from '../store/pet';
import UserDropdown from './UserDropdown';
import './css/NavBar.css'
import { fetchAllProducts } from '../store/product';

const NavBar = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user);
  const products = useSelector(state => state.product);
  const pet = useSelector((state) => state.pet);

  console.log('products obj', products)

  const [searchInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [productsArrState, setProductsArrState] = useState(Object.values(products));

  let productsArr = Object.values(products);
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
    console.log('product search matches!!!!!!!!!', productsArr);
  }
  console.log('did the update work?', productsArrState)

  const search = async (e) => {
    e.preventDefault()

    // if (!search) null

    // else {
    // if
    //   setSearchInput("")
    // }

    setSearchInput("")
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
        <form onSubmit={search} className='search-message-form-form'>
          <input
            onClick={displayDropdown}
            className='search-message-form-input-container'
            value={searchInput}
            onChange={updateSearchInputAndDropdown}
            placeholder={`Search`}
          />
          {showDropdown && (
            <div className='breed-list'>
              {
                productsArrState.map(product => {
                  return (
                    <div
                      key={product.id}
                      onClick={() => history.push(`/products/${product.id}`)}
                      className='breed-list-item'>
                      {product.name}
                    </div>
                  )
                })
              }
            </div>
          )}
        </form>
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
