import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function AdoptionDateForm() {
    const history = useHistory()

    const { petAdoptionDay, setPetAdoptionDay, petName, petProfileIcon } = usePet()
    console.log(petAdoptionDay, "PET Adoption DAY")

    const updatePetAdoptionDay = (e) => setPetAdoptionDay(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push('/pet/new/welcome')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={() => history.push('/pet/pet-name')}>
                    {'<'}
                </div>
                <img src={petProfileIcon} alt='pet-avatar' />
                <div>{`When is ${petName}'s adoption date?`}</div>
                <div>It's OK to enter an approximate date.</div>
                <input
                    required
                    placeholder='Birthday (MM/DD/YYYY)'
                    className="input"
                    type='text'
                    value={petAdoptionDay}
                    onChange={updatePetAdoptionDay} />
                    <button onClick={handleSubmit}>
                        Continue
                    </button>
            </div>
        </>
    );
}

export default AdoptionDateForm;
