import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function PetNameForm() {
    const history = useHistory()

    const { petName, setPetName } = usePet()
    console.log(petName, "PET NAME")

    const updateName = (e) => setPetName(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push('/pet/new/breed-selection-dog')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={() => history.push('/pet/new')}>
                    {'<'}
                </div>
                <div>What's their name?</div>
                <input
                    required
                    placeholder='Name'
                    className="input"
                    type='text'
                    value={petName}
                    minLength={3}
                    maxLength={20}
                    onChange={updateName} />
                    <button onClick={
                        handleSubmit
                        }>
                        Continue
                    </button>
            </div>
        </>
    );
}

export default PetNameForm;
