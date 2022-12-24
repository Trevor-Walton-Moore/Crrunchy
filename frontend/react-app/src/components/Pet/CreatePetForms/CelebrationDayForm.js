import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function CelebrationDayForm() {
    const history = useHistory()

    const { petCelebrationDay, setPetCelebrationDay, petName, petProfileIcon } = usePet()
    console.log(petCelebrationDay, "PET CelebrationDayyy")

    const celebrateBirthday = () => setPetCelebrationDay('Birthday');
    const celebrateAdoptionDay = () => setPetCelebrationDay('Adoption Day');

    const handleSubmit = async () => {
        if (petCelebrationDay === 'Birthday') {
            history.push('/pet/new/birthday-date')
        }
        else history.push('/pet/new/birthday-date')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={() => history.push('/pet/pet-gender')}>
                    {'<'}
                </div>
                <img src={petProfileIcon} alt='pet-avatar' />
                <div>{`When do you celebrate ${petName}?`}</div>
                <div>We want to celebrate with you!</div>
                <button onClick={() => {
                    celebrateBirthday();
                    handleSubmit();
                }}>
                    Birthday
                </button>
                <button onClick={() => {
                    celebrateAdoptionDay();
                    handleSubmit();
                }}>
                    Adoption Day
                </button>
            </div>
        </>
    );
}

export default CelebrationDayForm;
