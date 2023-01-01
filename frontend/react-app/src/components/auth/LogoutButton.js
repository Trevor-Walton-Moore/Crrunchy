import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = ({ userName }) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <span
    className='sign-out'
    onClick={onLogout}>
    Sign Out
  </span>;
};

export default LogoutButton;
