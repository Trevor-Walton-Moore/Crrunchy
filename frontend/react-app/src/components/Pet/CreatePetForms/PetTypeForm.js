import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'
import '../../css/CreatePet.css'
import { catAvatars, dogAvatars } from './ProfileIcons'

function PetTypeForm() {
    const history = useHistory()

    const dogIcon = dogAvatars[0];

    const catIcon = catAvatars[0];

    const { petType, setPetType } = usePet()
    console.log(petType, "PET TYPE")

    const updateType = (type) => setPetType(type);

    const handleSubmit = async () => {
        history.push('/pet/new/pet-name')
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
                        onClick={() => history.push('/')}>
                        <i class="fa-solid fa-chevron-left"/>
                    </span>
                    <span className='back-button close-button'
                        onClick={() => history.push('/')}>
                        <i class="fa-solid fa-xmark"/>
                    </span>
                </div>
                <div className='pet-prompt'>
                    First things first, what type of pet do you have?
                </div>
                <div className='pet-type-images-container'>
                    <span
                        className='pet-type-image-container'
                        onClick={() => {
                            updateType('Dog')
                            handleSubmit()
                        }}>
                        <img
                            src={dogIcon}
                            className='pet-image'
                            alt='pet-avatar' />
                        <div className='pet-type-text'>
                            Dog
                        </div>
                    </span>
                    <span
                        className='pet-type-image-container'
                        onClick={() => {
                            updateType('Cat')
                            handleSubmit()
                        }}>
                        <img
                            src={catIcon}
                            className='pet-image'
                            alt='pet-avatar' />
                        <div className='pet-type-text'>
                            Cat
                        </div>
                    </span>
                </div>
            </div>
        </>
    );
}

export default PetTypeForm;
