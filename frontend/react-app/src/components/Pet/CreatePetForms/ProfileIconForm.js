import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PetProvider, { usePet } from '../../../Context'
import { catAvatars, dogAvatars } from './ProfileIcons'
import '../../css/CreatePet.css'

function ProfileIconForm() {
    const history = useHistory()

    const { petProfileIcon, setPetProfileIcon, petBreed, petName, petType } = usePet()
    // console.log(petProfileIcon, "PET PROFILE ICON")

    if (!petType) {
        history.push('/pet/new')
    }

    const handleSubmit = async (icon) => {
        setPetProfileIcon(icon)
        history.push('/pet/new/pet-weight')
    }

    const normalizedIcons = []

    const normalizeIcons = (iconArr) => {
        for (let i = 0; i < iconArr.length; i++) {
            const obj = {}
            obj['id'] = i;
            obj['value'] = iconArr[i]
            normalizedIcons.push(obj)
        }
        return console.log(normalizedIcons, "nOrMaLiZeD ICONS")
    }

    const previousPage = () => {
        history.push('/pet/new/breed-selection')
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
                    <div className='back-button'
                        onClick={previousPage}>
                        <i class="fa-solid fa-chevron-left" />
                    </div>
                    <div className='back-button close-button'
                        onClick={() => history.push('/')}>
                        <i class="fa-solid fa-xmark" />
                    </div>
                </div>
                <div
                    className='sub-text'>
                    {`${petName}'s one of a kind to us.`}
                </div>
                <div
                    className='pet-prompt'>
                    {`Add ${petName}'s profile photo`}
                </div>
                <div
                    className='sub-text'>
                    Pick one that looks most like pook.
                </div>
                <div className='pet-icons-container'>
                    {petType === 'Dog' && (
                        normalizeIcons(dogAvatars),
                        normalizedIcons.map(icon => {
                            return (
                                <div
                                    key={icon.id}
                                    className='pet-icon-container'
                                    onClick={() => handleSubmit(icon.value)}>
                                    <img
                                        className='icon-image'
                                        src={icon.value}
                                        alt='pet-avatar' />
                                </div>
                            )
                        })
                    )}
                </div>
                <div className='pet-icons-container'>
                    {petType === 'Cat' && (
                        normalizeIcons(catAvatars),
                        normalizedIcons.map(icon => {
                            return (
                                <div
                                    key={icon.id}
                                    className='pet-icon-container'
                                    onClick={() => handleSubmit(icon.value)}
                                >
                                    <img
                                        className='icon-image'
                                        src={icon.value}
                                        alt='pet-avatar' />
                                </div>
                            )
                        })
                    )}
                </div>
                {/* <input
                    required
                    placeholder='Breed'
                    className="input"
                    type='text'
                    value={petProfileIcon}
                    onChange={updateProfileIcon} /> */}
            </div>
        </>
    );
}

export default ProfileIconForm;
