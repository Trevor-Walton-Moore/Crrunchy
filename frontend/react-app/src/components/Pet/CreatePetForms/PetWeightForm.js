import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function PetWeightForm() {
    const history = useHistory()

    const { petWeight, setPetWeight, petName, petProfileIcon } = usePet()
    console.log(petWeight, "PET Weight")

    const updateWeight = (e) => setPetWeight(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push('/pet/new/pet-gender')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='top-buttons'>
                    <div className='back-button'
                        onClick={() => history.push('/pet/new/avatar-selection')}>
                        {'<'}
                    </div>
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
                    Nice choice 😎
                </div>
                <div
                    className='pet-prompt'>
                    {`How much does ${petName} weigh?`}
                </div>
                <div
                    className='sub-text'>
                    It's OK to enter an approximate weight
                </div>
                <form>

                    <input
                        required
                        placeholder='Weight(lbs)'
                        className="input"
                        type='number'
                        value={petWeight}
                        min={1}
                        max={300}
                        onChange={updateWeight} />
                    <button
                        className='continue-button'
                        onClick={handleSubmit}>
                        Continue
                    </button>
                </form>
            </div>
        </>
    );
}

export default PetWeightForm;
