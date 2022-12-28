import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { usePet } from '../../../Context'
import { fetchCreatePet } from '../../../store/pet'

function BirthDateForm() {
    const history = useHistory()

    const dispatch = useDispatch()

    const { petBirthday, setPetBirthday,
        petType,
        petName,
        petBreed,
        petProfileIcon,
        petWeight,
        petGender,
        petCelebrationDay
    } = usePet()
    console.log(petBirthday, "PET BIRTHDAY")

    const [type, setType] = useState(petType);
    const [name, setName] = useState(petName);
    const [breed, setBreed] = useState(petBreed);
    const [profileIcon, setProfileIcon] = useState(petProfileIcon);
    const [weight, setWeight] = useState(petWeight);
    const [gender, setGender] = useState(petGender);
    const [celebrationDay, setCelebrationDay] = useState(petCelebrationDay);
    const [birthday, setBirthday] = useState(petBirthday);

    const updatePetBirthday = (e) => {
        setBirthday(e.target.value)
        setPetBirthday(e.target.value)
    };

    const handleSubmit = async () => {

        const payload = {
            type,
            name,
            breed,
            profileIcon,
            weight,
            gender,
            celebrationDay,
            birthday
        }
        console.log('the REEAL payload', payload)
        dispatch(fetchCreatePet(payload))
        history.push('/pet/new/welcome')
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='top-buttons'>
                    <span className='back-button'
                        onClick={() => history.push('/pet/new/celebration-type')}>
                        {'<'}
                    </span>
                </div><div className='chosen-icon-container'>
                    <img
                        className='icon-image'
                        src={petProfileIcon}
                        alt='pet-avatar' />
                </div>
                <div className='sub-text'>
                    Did someone say “birthday surprises?” 🎂
                </div>
                <div className='pet-prompt'>
                    {`When is ${petName}'s birthday?`}
                </div>
                <div className='sub-text'>
                    It's OK to enter an approximate age.

                </div>
                <form>
                    <input
                        required
                        placeholder='Birthday (MM/DD/YYYY)'
                        className="input"
                        type='text'
                        value={petBirthday}
                        onChange={updatePetBirthday} />
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

export default BirthDateForm;
