import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { usePet } from '../../../Context'
import { fetchCreatePet } from '../../../store/pet'


function PetGenderForm() {
    const history = useHistory();

    const { petGender, setPetGender,
        petName,
        petProfileIcon,
    } = usePet()
    console.log(petGender, "PET Genderrr")

    const handleSubmit = async (gender) => {
        console.log('handle submit gender', gender)
        history.push('/pet/new/celebration-type')
    }

    const updateGender = (gender) => {
        setPetGender(gender);
        handleSubmit();
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
                        onClick={() => history.push('/pet/new/pet-weight')}>
                        {'<'}
                    </span>
                    <span className='back-button close-button'
                        onClick={() => history.push('/')}>
                        {'x'}
                    </span>
                </div>
                <div className='chosen-icon-container'>
                    <img
                        className='icon-image'
                        src={petProfileIcon}
                        alt='pet-avatar' />
                </div>
                <div className='sub-text'>
                    Noted! ✍️
                </div>
                <div className='pet-prompt'>
                    {`What best describes ${petName}?`}
                </div>
                <form className='create-pet-form'>
                    <button
                        className='options-buttons'
                        onClick={() => updateGender('Female')}>
                        Female
                    </button>
                    <button
                        className='options-buttons'
                        onClick={() => updateGender('Male')}>
                        Male
                    </button>
                </form>
            </div>
        </>
    );
}

export default PetGenderForm;
