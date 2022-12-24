import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function PetWeightForm() {
    const history = useHistory()

    const { petWeight, setPetWeight, petName, petProfileIcon } = usePet()
    console.log(petWeight, "PET Weight")

    const updateWeight = (e) => setPetWeight(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push('/pet/new/pet-gender')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={() => history.push('/pet/new/avatar-selection')}>
                    {'<'}
                </div>
                <img src={petProfileIcon} alt='pet-avatar' />
                <div>{`How much does ${petName} weigh?`}</div>
                <div>It's OK to enter an approximate weight.</div>
                <input
                    required
                    placeholder='Weight(lbs)'
                    className="input"
                    type='number'
                    value={petWeight}
                    min={1}
                    max={300}
                    onChange={updateWeight} />
                <button onClick={
                    handleSubmit
                }>
                    Continue
                </button>
            </div>
        </>
    );
}

export default PetWeightForm;
