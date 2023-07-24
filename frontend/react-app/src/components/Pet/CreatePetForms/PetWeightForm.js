import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function PetWeightForm() {
    const history = useHistory()

    const user = useSelector(state => state.session.user)

    if (!user) {
        history.push('/login')
    }

    const { petWeight, setPetWeight, petName, petProfileIcon, petType } = usePet()

    if (!petType) {
        history.push('/pet/new')
    }

    const [errors, setErrors] = useState([]);

    const updateWeight = (e) => setPetWeight(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!petWeight) {
            setErrors(['Weight required.'])
        }
        else history.push('/pet/new/pet-gender')
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
                    <div className='back-button'
                        onClick={() => history.push('/pet/new/avatar-selection')}>
                        <i class="fa-solid fa-chevron-left" />
                    </div>
                    <span className='back-button close-button'
                        onClick={() => history.push('/')}>
                        <i class="fa-solid fa-xmark" />
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
                <form
                    className='create-pet-form'>

                    <input
                        required
                        placeholder='Weight(lbs)'
                        className="input"
                        type='number'
                        value={petWeight}
                        min={1}
                        max={300}
                        onChange={updateWeight} />
                    <div>
                        {errors && errors.map((error, ind) => (
                            <div
                                className='date-error'
                                key={ind}>
                                {error}
                            </div>
                        ))}
                    </div>
                    <button
                        className='continue-button'
                        onClick={handleSubmit}>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PetWeightForm;
