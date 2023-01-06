import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function Welcome() {
    const history = useHistory()

    const pet = useSelector((state) => state.pet);
    const user = useSelector(state => state.session.user)

    if (!user) {
        history.push('/login')
    }

    if (!pet.id) {
        history.push('/')
    }

    // console.log(pet, 'PET USE STATE IN WELOME PAGE')

    const { petName, petProfileIcon,
        setPetAdoptionDate,
        setPetBirthday,
        setPetType,
        setPetName,
        setPetBreed,
        setPetProfileIcon,
        setPetWeight,
        setPetGender,
        setPetCelebrationDay, } = usePet()

    if (!petName) {
        history.push('/')
    }

    const clearContextRedirect = () => {
        history.push(`/pet/${pet.id}`)

        setPetType('')
        setPetName('')
        setPetBreed('')
        setPetProfileIcon('')
        setPetWeight('')
        setPetGender('')
        setPetCelebrationDay('')
        setPetAdoptionDate('')
        setPetBirthday('')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='welcome-icon-container'>
                    <img
                        className='icon-image'
                        src={petProfileIcon}
                        alt='pet-avatar' />
                </div>
                <div className='pet-prompt'>
                    {`Welcome to the Chrunchy pack, ${petName}!`}
                </div>
                <form>
                    <div className='sub-text'>
                        {`We saved the basics and created a profile for all things ${petName}.`}
                    </div>
                    <div className='sub-text'>
                        {`Share some extra detials about ${petName}'s health, habits and tastes for even more perks.`}
                    </div>
                    <button className='continue-button'
                        onClick={() => history.push(`/coming-soon`)}>
                        Tell Us More
                    </button>
                    <button className='options-buttons'
                        onClick={clearContextRedirect}>
                        I'll Do This Later
                    </button>
                </form>
            </div>
        </>
    );
}

export default Welcome;
