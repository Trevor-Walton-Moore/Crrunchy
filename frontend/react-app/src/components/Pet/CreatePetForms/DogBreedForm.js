import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function DogBreedForm() {
    const history = useHistory()

    const { petBreed, setPetBreed, petName } = usePet()
    console.log(petBreed, "PET BREED")

    const updateBreed = (e) => setPetBreed(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push('/pet/new/pet-weight')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={() => history.push('/pet/pet-name')}>
                    {'<'}
                </div>
                <div>{`What is ${petName}'s breed?`}</div>
                <input
                    required
                    placeholder='Breed'
                    className="input"
                    type='text'
                    value={petBreed}
                    onChange={updateBreed} />
                <button
                    type='button'
                    onClick={() => {
                        setPetBreed('Borzoi')
                    }}>
                    I'm not sure of the breed
                </button>
                    <button onClick={handleSubmit}>
                        Continue
                    </button>
            </div>
        </>
    );
}

export default DogBreedForm;
