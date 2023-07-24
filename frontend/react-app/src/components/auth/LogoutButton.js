import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
import { fetchRemoveOrder } from '../../store/order';
import { removePet } from '../../store/pet';

const LogoutButton = ({ orderId, petId }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    dispatch(logout())
    if (orderId) {
      dispatch(fetchRemoveOrder(orderId))
    }
      dispatch(removePet())
    history.push('/')
  };

  return <span
    className='sign-out'
    onClick={onLogout}>
    Sign Out
  </span>;
};

export default LogoutButton;
