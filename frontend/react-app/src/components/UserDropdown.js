import React, { useState, useEffect } from 'react';
import { NavLink, Switch, useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';
import LogoutButton from './auth/LogoutButton';
import './css/NavBar.css'

const UserDropdown = () => {
    const history = useHistory();

    const user = useSelector((state) => state.session.user);
    const pet = useSelector((state) => state.pet);
    const orderId = useSelector((state) => state.order?.order?.id);
    console.log('dropdown order id B) ', orderId)

    !pet.id && console.log(pet, "NO PET NO PETTTT")

    pet.id && console.log(pet, "PETtttt there is one")

    const [showMenu, setShowMenu] = useState(false);
    const [petId, setPetId] = useState('');

    useEffect(() => {
        if (!showMenu) { return }
        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const openMenu = () => {
        if (showMenu) return
        else setShowMenu(true)
    };

    useEffect(() => {
        if (Object.values(pet)?.length > 0) {
            setPetId(pet?.id)
        }

    }, [pet]);

    return (
        <div className='dropdown-main'>
            <div
                className='account-dropdown-button'
                onClick={() => openMenu()}>
                <div className='account-dropdown-button-children'>
                    <div>
                    {
                        user &&
                        <div className='hi-user'>
                            Hi, {`${user?.firstName}`}!
                        </div>
                    }
                    <div className='account'>
                        account
                    </div>
                    </div>
                    <div className='dropdown-arrow'>
                        <i class="fa-solid fa-chevron-down" />
                    </div>
                </div>
            </div>

            {showMenu && (
                // {!isHidden && !showMenu && (
                <div className="user-dropdown-container">
                    {!user && (
                        <div className='login-signup-container'>
                            <NavLink
                                to='/login'
                                className='login-button'>
                                Sign In
                            </NavLink>
                            <div className='start-here'>
                                New Customer?&nbsp;
                                <NavLink
                                    to='/sign-up'
                                    className='signup-button'>
                                    Start here
                                </NavLink>
                            </div>
                        </div>
                    )}
                    <div
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Account
                    </div>
                    <div
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Orders
                    </div>
                    <div
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Manage Autoship
                    </div>
                    <div
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Favorites
                    </div>
                    <div
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Buy Again
                    </div>
                    <div
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Prescriptions
                    </div>
                    <div
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        My Pet Health
                    </div>
                    <div
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Connect with a Vet
                    </div>
                    <div
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        CarePlus Pet Insurance and Wellness Plans
                    </div>
                    <div
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        My Rescues
                    </div>
                    {
                        (pet?.id && user?.id) &&
                        <NavLink
                            to={`/pet/${petId}`}
                            exact={true}
                            className="user-dropdown-button"
                        >
                            My Pet
                        </NavLink>
                    }
                    {
                        (!pet?.id || !user?.id) &&
                        <NavLink
                            to={`/pet/new`}
                            exact={true}
                            className="user-dropdown-button"
                        >
                            Create a Pet Profile
                        </NavLink>
                    }

                    {
                        user &&
                        <span className='not-user'>
                            {`Not ${user.firstName}? `}
                            <LogoutButton orderId={orderId}/>
                        </span>
                    }
                </div>
            )}
        </div>
    )
}

export default UserDropdown
