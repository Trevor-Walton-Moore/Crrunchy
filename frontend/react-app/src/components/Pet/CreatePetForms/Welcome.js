import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function Welcome() {
    const history = useHistory()

    const { petGender, setPetGender, petName, petProfileIcon } = usePet()
    console.log(petGender, "PET Genderrr")

    

    const updateGender = (e) => setPetGender(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push('/pet/new/celebration-type')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={() => history.push('/pet/pet-weight')}>
                    {'<'}
                </div>
                <div>{`What best describes ${petName}?`}</div>
                <input
                    required
                    className="input"
                    type='text'
                    value={petGender}
                    min={1}
                    max={300}
                    onChange={updateGender} />
                    <button onClick={handleSubmit}>
                        Continue
                    </button>
            </div>
        </>
    );
}

export default Welcome;
