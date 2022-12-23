import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PetProvider, { usePet } from '../../../Context'


function ProfileIconForm() {
    const history = useHistory()

    const { petProfileIcon, setPetProfileIcon, petName } = usePet()
    console.log(petProfileIcon, "PET PROFILE ICON")

    const updateProfileIcon = (e) => setPetProfileIcon(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push('/pet/new/')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={() => history.push('/pet/new')}>
                    {'<'}
                </div>
                <div>{`Add ${petName}'s profile photo`}</div>
                <input
                    required
                    placeholder='Breed'
                    className="input"
                    type='text'
                    value={petProfileIcon}
                    onChange={updateProfileIcon} />
            </div>
        </>
    );
}

export default ProfileIconForm;
