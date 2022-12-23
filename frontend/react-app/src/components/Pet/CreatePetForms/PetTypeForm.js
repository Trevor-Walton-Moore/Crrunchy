import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'

function PetTypeForm() {
    const history = useHistory()

    const { petType, setPetType } = usePet()
    console.log(petType, "PET TYPE")

    const updateType = (type) => setPetType(type);

    const handleSubmit = async () => {
        history.push('/pet/new/pet-name')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={() => history.push('/')}>
                    {'<'}
                </div>
                <div>First things first, what type of pet do you have?</div>
                <button
                    onClick={() => {
                        updateType('Dog')
                        handleSubmit()
                    }}>
                    Dog
                </button>

                <button>Cat</button>
            </div>
        </>
    );
}

export default PetTypeForm;
