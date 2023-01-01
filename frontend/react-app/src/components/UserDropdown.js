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

    !pet.id && console.log(pet, "PET")

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
        <div className='dropdown-main'>
            {
                user &&
                <div
                    className='acount-dropdown-button'
                    onClick={() => openMenu()}>
                    <span>
                        <div className='hi-user'>
                            Hi, {`${user?.firstName}`}!
                        </div>
                        <div className='account'>
                            account
                        </div>
                    </span>
                    <span className='dropdown-arrow'>{">"}</span>
                </div>
            }
            {
                !user &&
                <div>you are not logged in!</div>
            }

            {showMenu && (
                // {!isHidden && !showMenu && (
                <div className="user-dropdown-container">
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
                        pet.id &&
                        <NavLink
                            to={`/pet/${pet.id}`}
                            exact={true}
                            className="user-dropdown-button"
                        >
                            My Pet
                        </NavLink>
                    }
                    {
                        !pet.id &&
                        <NavLink
                            to={`/pet/new`}
                            exact={true}
                            className="user-dropdown-button"
                        >
                            Create a Pet Profile
                        </NavLink>
                    }
                    <span className='not-user'>
                        {`Not ${user.firstName}? `}
                        <LogoutButton />
                    </span>
                </div>

            )}
            <div>
            </div>
        </div>
    )
}

export default UserDropdown
