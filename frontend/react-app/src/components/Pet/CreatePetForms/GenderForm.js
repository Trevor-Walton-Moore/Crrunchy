import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { usePet } from '../../../Context'
import { fetchCreatePet } from '../../../store/pet'


function PetGenderForm() {
    const history = useHistory();
    // const dispatch = useDispatch();


    // const pet = useSelector((state) => state.pet);

    const { petGender, setPetGender,
        // petType,
        petName,
        // petBreed,
        petProfileIcon,
        // petWeight,
        // petCelebrationDay,
        // petBirthday,
        // petAdoptionDay,
        // petCoverImage
    } = usePet()
    console.log(petGender, "PET Genderrr")

    // console.log('pet context pls work!!!',
    //     petGender,
    //     petType,
    //     petName,
    //     petBreed,
    //     petProfileIcon,
    //     petWeight,
    //     petCelebrationDay,
    //     petBirthday,
    //     petAdoptionDay,
    //     petCoverImage
    // )

    // const [type, setType] = useState(petType);
    // const [name, setName] = useState(petName);
    // const [breed, setBreed] = useState(petBreed);
    // const [profileIcon, setProfileIcon] = useState(petProfileIcon);
    // const [weight, setWeight] = useState(petWeight);

    // const chooseMale = () => {
    //     setGender('Male')
    //     setPetGender('Male')
    // };
    // const chooseFemale = () => {
    //     setGender('Female')
    //     setPetGender('Female')
    // };

    const handleSubmit = async (gender) => {
        // const celebrationDay = 'Birthday'

        console.log('handle submit gender', gender)

        // const payload = {
        //     type,
        //     name,
        //     breed,
        //     profileIcon,
        //     weight,
        //     gender,
        //     celebrationDay,
            // petCelebrationDay,
            // petBirthday,
            // petAdoptionDay,
            // petCoverImage,
        // };
        // console.log("PAYYYYYLOAD typess", payload)
        // dispatch(fetchCreatePet(payload));
        history.push('/pet/new/celebration-type')
    }

    const updateGender = (gender) => {
        setPetGender(gender);
        handleSubmit();
    }

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
                <form>
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
