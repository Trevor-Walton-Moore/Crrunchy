import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'
import '../../css/CreatePet.css'

function PetNameForm() {
    const history = useHistory()

    const { petName, setPetName, petType } = usePet()
    console.log(petName, "PET NAME")

    if(!petType) {
        history.push('/pet/new')
    }

    const updateName = (e) => setPetName(e.target.value);

    const handleSubmit = async (e) => {
        // if (petType === "Dog") {
        e.preventDefault();
        history.push('/pet/new/breed-selection')
        // }
        // else if (petType === "Cat") {
        //     e.preventDefault();
        //     history.push('/pet/new/breed-selection-cat')
        // }
    }

    const refreshCheck = (e) => {
        e.preventDefault();
        e.returnValue = "";
    };

    useEffect(() => {
        window.addEventListener("beforeunload", refreshCheck);
        return () => {
            window.removeEventListener("beforeunload", refreshCheck);
        };
    }, []);

    return (
        <>
            <div className='pet-form-container'>
                <div className='top-buttons'>
                    <span className='back-button'
                        onClick={() => history.push('/pet/new')}>
                        {'<'}
                    </span>
                    <span className='back-button close-button'
                        onClick={() => history.push('/')}>
                        {'x'}
                    </span>
                </div>
                <div
                    className='sub-text'>
                    We’re already obsessed 😀
                </div>
                <div className='pet-prompt'>
                    What's their name?
                </div>
                <form
                    className='create-pet-form'
                    onSubmit={handleSubmit}>
                <input
                    required
                    placeholder='Pet Name'
                    className="input"
                    type='text'
                    value={petName}
                    minLength={3}
                    maxLength={20}
                    onChange={updateName} />
                    <button
                        className='continue-button'
                        type='submit'>
                        Continue
                    </button>
                </form>
                {/* </div> */}
            </div>
        </>
    );
}

export default PetNameForm;
