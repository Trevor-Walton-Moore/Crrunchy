import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import UserDropdown from './UserDropdown';

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  console.log(user, 'USERRRRRRRR')

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
