import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { usePet } from '../../../Context'
import { fetchCreatePet } from '../../../store/pet'


function PetGenderForm() {
    const history = useHistory();
    const dispatch = useDispatch();


    const pet = useSelector((state) => state.pet);

    const { petGender, setPetGender,
        petType,
        petName,
        petBreed,
        petWeight,
        petProfileIcon,
        petCelebrationDay,
        petBirthday,
        petAdoptionDay,
        petCoverImage
    } = usePet()
    console.log(petGender, "PET Genderrr")

    console.log('pet context pls work!!!',
        petGender,
        petType,
        petName,
        petBreed,
        petWeight,
        petProfileIcon,
        petCelebrationDay,
        petBirthday,
        petAdoptionDay,
        petCoverImage)

    const [type, setType] = useState(petType);
    const [name, setName] = useState(petName);
    const [breed, setBreed] = useState(petBreed);
    const [weight, setWeight] = useState(petWeight);
    const [gender, setGender] = useState(petGender);

    const updateGender = (e) => {
        setPetGender(e.target.value);
        setGender(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const celebrationDay = 'Birthday'

        const payload = {
            type,
            name,
            breed,
            weight,
            gender,
            celebrationDay
            // petCelebrationDay,
            // petBirthday,
            // petAdoptionDay,
            // petProfileIcon,
            // petCoverImage,
        };
        console.log("PAYYYYYLOAD typess", payload)
        dispatch(fetchCreatePet(payload));
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={() => history.push('/pet/pet-weight')}>
                    {'<'}
                </div>
                <div>{`What best describes ${petName}?`}</div>
                <input
                    required
                    className="input"
                    type='text'
                    value={petGender}
                    min={1}
                    max={300}
                    onChange={updateGender} />
                <button onClick={handleSubmit}>
                    Continue
                </button>
            </div>
        </>
    );
}

export default PetGenderForm;
