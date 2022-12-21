import React, { useState, useEffect } from 'react';
import { NavLink, Switch, useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';
import LogoutButton from './auth/LogoutButton';

const UserDropdown = () => {
    const history = useHistory();

    const user = useSelector((state) => state.session.user);
    const pet = useSelector((state) => state.session.pet);

    const [showMenu, setShowMenu] = useState(false);

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

    return (
        <div>
            {
                user &&
                <div onClick={() => openMenu()}>
                    <span>
                        <div>
                            Hi, {`${user?.first_name}`}!
                        </div>
                        <div>
                            your account
                        </div>
                    </span>
                    <span>{">"}</span>
                </div>
            }
            {
                !user &&
                <div>you are not logged in!</div>
            }

            {showMenu && (
                // {!isHidden && !showMenu && (
                <div className="user-dropdown-container">
                    <button
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Account
                    </button>
                    <button
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Orders
                    </button>
                    <button
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Manage Autoship
                    </button>
                    <button
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Favorites
                    </button>
                    <button
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Buy Again
                    </button>
                    <button
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Prescriptions
                    </button>
                    <button
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        My Pet Health
                    </button>
                    <button
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        Connect with a Vet
                    </button>
                    <button
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        CarePlus Pet Insurance and Wellness Plans
                    </button>
                    <button
                        className="user-dropdown-button"
                        onClick={() => history.push('/coming-soon')}>
                        My Rescues
                    </button>
                    {
                        pet &&
                        <NavLink
                            to={`/pets/${pet?.id}`}
                            exact={true}
                            className="user-dropdown-button"
                        >
                            My Pet
                        </NavLink>
                    }
                    {
                        !pet &&
                        <NavLink
                            to={`/pets/${pet?.id}`}
                            exact={true}
                            className="user-dropdown-button"
                        >
                            Pet Profile
                        </NavLink>
                    }
                    <NavLink
                        to='/login'
                        exact={true}
                        className="user-dropdown-button"
                    >
                        Log in
                    </NavLink>
                    <NavLink
                        to='/sign-up'
                        exact={true}
                        className="user-dropdown-button"
                    >
                        Sign in
                    </NavLink>
                    <LogoutButton />
                </div>

            )}
            <div>
            </div>
        </div>
    )
}

export default UserDropdown
