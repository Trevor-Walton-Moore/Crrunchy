import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import { fetchOnePet } from '../store/pet';
import UserDropdown from './UserDropdown';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const pet = useSelector((state) => state.pet);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOnePet(user?.id))
  }, [dispatch, user?.id]);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
