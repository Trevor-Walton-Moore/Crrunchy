import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../css/Auth.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password, repeatPassword));
      if (data) {
        console.log(data, 'ERROR DATA')
        setErrors(data)
      }
    }
    else setErrors(['Passwords must match.'])
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-main'>
      <div className='login-div'>
        <div className='login-title'>
          Create an Account
        </div>
        <form

          onSubmit={onSignUp}>
          <div className='returning-or-new-customer'>
            I'm a Returning Customer
          </div>
          <div>
            {errors.map((error, ind) => (
              <div
                className='error'
                key={ind}>
                {error}
              </div>
            ))}
          </div>
          {/* <div> */}
          {/* <label>First Name</label> */}
          <input
            className='auth-input signup-input'
            type='text'
            name='firstName'
            placeholder='First Name'
            onChange={updateFirstName}
            value={firstName}
          ></input>
          {/* </div> */}
          {/* <div> */}
          {/* <label>User Name</label> */}
          <input
            className='auth-input signup-input'
            type='text'
            name='lastName'
            placeholder='Last Name'
            onChange={updateLastName}
            value={lastName}
          ></input>
          {/* </div> */}
          {/* <div> */}
          {/* <label>User Name</label> */}
          <input
            className='auth-input signup-input'
            type='text'
            name='username'
            placeholder='User Name'
            onChange={updateUsername}
            value={username}
          ></input>
          {/* </div> */}
          {/* <div> */}
          {/* <label>Email</label> */}
          <input
            className='auth-input signup-input'
            type='email'
            name='email'
            placeholder='Email'
            onChange={updateEmail}
            value={email}
          ></input>
          {/* </div> */}
          {/* <div> */}
          {/* <label>Password</label> */}
          <input
            className='auth-input signup-input'
            type='password'
            name='password'
            placeholder='Password'
            onChange={updatePassword}
            value={password}
          ></input>
          {/* </div> */}
          {/* <div> */}
          {/* <label>Repeat Password</label> */}
          <input
            className='auth-input signup-input'
            type='password'
            name='repeat_password'
            placeholder='Confirm Password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
          ></input>
          {/* </div> */}
          <div className='signup-tips-list'>
            <div>
              Tips for a strong password:
            </div>
            <ul>
              <li>
                Create a unique password that you're not using anywhere else.
              </li>
              <li>
                Use a combination of uppercase and lowercase letters and numbers.
              </li>
              <li>
                Use special characters in your password
              </li>
            </ul>
          </div>
          <button
            className='login-button-page signup-button-page'
            type='submit'>
            Sign Up
          </button>
          <div className='terms-of-service'>
            By creating your account, you agree to Chewy's&nbsp;
            <NavLink
              className='terms-links'
              to='/coming-soon'>
              Privacy Policy&nbsp;
            </NavLink>
            and&nbsp;
            <NavLink
              className='terms-links'
              to='/coming-soon'>
              Terms of Use.
            </NavLink>
          </div>
          <div className='already-have-an-account'>
            <div className="account-line"></div>
            <div className='account-question'>
              Already have an account?
            </div>
            <div className="account-line"></div>
          </div>
          <div>
            <NavLink
              className='create-account-button
            login-button-from-signup'
              to='/login'>
              {/* <button
                className='login-button-from-signup'> */}
              Sign In
              {/* </button> */}
            </NavLink>
          </div>
        </form>
      </div>
      <div className='signup-tips-2-container'>
        <div className='signup-tips-list signup-tips-list-2'>
          <div>
            Creating an account is fast, easy,
            and free. You'll be able to manage your
            autoships, track your orders, write reviews, and more!
          </div>
          <ul>
            <li>
              TRACK YOUR ORDERS
            </li>
            <li>
              MANAGE AUTOSHIP
            </li>
            <li>
              VIEW YOUR ORDER HISTORY
            </li>
            <li>
              RATE AND REVIEW PRODUCTS
            </li>
            <li>
              GET EXCLUSIVE OFFERS, DISCOUNTS, AND MORE!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
