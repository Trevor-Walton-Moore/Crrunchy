import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import { fetchOnePet } from '../store/pet';
import UserDropdown from './UserDropdown';
import './css/NavBar.css'
// import { fetchAllProducts } from '../store/product';
import { fetchOneOrder } from '../store/order';

const NavBar = () => {
  // const history = useHistory()

  const user = useSelector(state => state.session.user);
  const pet = useSelector((state) => state.pet);
  const orderObj = useSelector(state => state.order);
  const orderSize = Object.values(orderObj?.order?.orderProducts).length;


  // console.log('navbar orderProducts', orderObj)
  // console.log('navbar orderProducts', orderSize)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOnePet(user?.id));
    dispatch(fetchOneOrder(user?.id));
    // dispatch(fetchAllProducts());
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
        <NavLink to='/cart'
          className='cart-button'>
          {orderSize}&nbsp;cart
        </NavLink>
      </span>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
