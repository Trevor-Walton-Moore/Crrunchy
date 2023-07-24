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
        petType
    } = usePet()

    if(!petType) {
        history.push('/pet/new')
    }

    const handleSubmit = async (gender) => {
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
        <div className='create-pet-main'>
            <div className='pet-form-container'>
                <div className='top-buttons'>
                    <span className='back-button'
                        onClick={() => history.push('/pet/new/pet-weight')}>
                        <i class="fa-solid fa-chevron-left"/>
                    </span>
                    <span className='back-button close-button'
                        onClick={() => history.push('/')}>
                        <i class="fa-solid fa-xmark"/>
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
        </div>
    );
}

export default PetGenderForm;
