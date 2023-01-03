import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import { fetchOnePet } from '../store/pet';
import UserDropdown from './UserDropdown';
import './css/NavBar.css'
import { fetchAllProducts } from '../store/product';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const pet = useSelector((state) => state.pet);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOnePet(user?.id))
  }, [dispatch, user?.id]);

  return (
    <nav className='NavBar'>
      {/* <div> */}
        <span>
          <NavLink to='/' exact={true} className='crunchy'>
            Crunchy
          </NavLink>
        </span>
        <span className='account-cart'>
        <span>
          <UserDropdown />
        </span>
        <span className='cart-button'>cart</span>
        </span>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
