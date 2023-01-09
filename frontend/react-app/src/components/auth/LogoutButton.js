import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
import { fetchRemoveOrder } from '../../store/order';
import { removePet } from '../../store/pet';

const LogoutButton = ({ orderId, petId }) => {
  console.log('order id right in loggout compognant', orderId)
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    dispatch(logout())
    if (orderId) {
      console.log('logout order id after logout dispatched B) ', orderId)
      dispatch(fetchRemoveOrder(orderId))
      console.log('DID THE DELETE ORDER THUNK AFTER LOGGONG OUTE')
    }
    console.log('THE DELETE pet from state after logout')
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
