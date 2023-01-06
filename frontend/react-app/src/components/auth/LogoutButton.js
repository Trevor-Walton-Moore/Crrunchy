import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
import { fetchDeleteOrder } from '../../store/order';

const LogoutButton = ({ orderId }) => {
  console.log('order id right in loggout compognant', orderId)
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    dispatch(logout())
    if (orderId) {
      console.log('logout order id B) ', orderId)
      dispatch(fetchDeleteOrder(orderId))
      console.log('DID THE DELETE ORDER THUNK AFTER LOGGONG OUTE')
    }
    history.push('/')
  };

  return <span
    className='sign-out'
    onClick={onLogout}>
    Sign Out
  </span>;
};

export default LogoutButton;
