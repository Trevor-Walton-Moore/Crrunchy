import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PetProvider, { usePet } from '../../../Context'
import { catAvatars, dogAvatars } from './ProfileIcons'


function ProfileIconForm() {
    const history = useHistory()

    const { petProfileIcon, setPetProfileIcon, petBreed, petName, petType } = usePet()
    console.log(petProfileIcon, "PET PROFILE ICON")

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
        petType === "Dog" ? history.push('/pet/new/breed-selection-dog') : history.push('/pet/new/breed-selection-cat')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={previousPage}>
                    {'<'}
                </div>
                <div>{`Add ${petName}'s profile photo`}</div>
                {petType === 'Dog' && (
                    normalizeIcons(dogAvatars),
                    normalizedIcons.map(icon => {
                        return (
                            <div
                                key={icon.id}
                                className='pet-icon-image'
                                onClick={() => handleSubmit(icon.value)}>
                                <img src={icon.value} alt='pet-avatar' />
                            </div>
                        )
                    })
                )}
                {petType === 'Cat' && (
                    normalizeIcons(catAvatars),
                    normalizedIcons.map(icon => {
                        return (
                            <div
                                key={icon.id}
                                className='pet-icon-image'
                                onClick={() => handleSubmit(icon.value)}
                            >
                                <img src={icon.value} alt='pet-avatar' />
                            </div>
                        )
                    })
                )}
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
