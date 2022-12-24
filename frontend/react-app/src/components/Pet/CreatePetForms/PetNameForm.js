import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function PetNameForm() {
    const history = useHistory()

    const { petName, setPetName, petType } = usePet()
    console.log(petName, "PET NAME")

    const updateName = (e) => setPetName(e.target.value);

    const handleSubmit = async (e) => {
        if (petType === "Dog") {
            e.preventDefault();
            history.push('/pet/new/breed-selection-dog')
        }
        else if (petType === "Cat") {
            e.preventDefault();
            history.push('/pet/new/breed-selection-cat')
        }
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
                <form onSubmit={handleSubmit}>
                    <button type='submit'>
                        Continue
                    </button>
                </form>
            </div>
        </>
    );
}

export default PetNameForm;
