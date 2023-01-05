import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { usePet } from '../../../Context'
import { fetchCreatePet } from '../../../store/pet'

function BirthDateForm() {
    const history = useHistory()

    const dispatch = useDispatch()

    const { petBirthday, setPetBirthday,
        petType, setPetType,
        petName, setPetName,
        petBreed, setPetBreed,
        petProfileIcon, setPetProfileIcon,
        petWeight, setPetWeight,
        petGender, setPetGender,
        petCelebrationDay, setPetCelebrationDay,
    } = usePet()
    console.log(petBirthday, "PET BIRTHDAY")

    const [errors, setErrors] = useState([]);
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const petDate = new Date(birthday);
        const petMonth = (petDate.getMonth() + 1)
        const petDay = (petDate.getDate() + 1)
        const petYear = (petDate.getFullYear())
        const convertedPetDate = petMonth + "-" + petDay + "-" + petYear
        console.log(convertedPetDate, "converted date")

        const payload = {
            type,
            name,
            breed,
            profileIcon,
            weight,
            gender,
            celebrationDay,
            birthday: convertedPetDate,
            coverImage: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1672688691/Crunchy%20images/cover-photo-default_ztxb2f.png',
        }
        console.log('the REEAL payload', payload)
        const data = await dispatch(fetchCreatePet(payload))
            .then((data) => {
                if (data.errors) {
                    console.log('error DATA', data)
                    // const errArr = [data.errors]
                    setErrors(['Error: Please enter a date']);
                } else history.push('/pet/new/welcome')
            })

        // setPetType('')
        // setPetName('')
        // setPetBreed('')
        // setPetProfileIcon('')
        // setPetWeight('')
        // setPetGender('')
        // setPetCelebrationDay('')
        // setPetBirthday('')
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
                    It's OK to enter an approximate date.

                </div>
                <form className='create-pet-form'>
                    <input
                        
                        placeholder='Birthday (MM/DD/YYYY)'
                        className="input"
                        type='date'
                        value={petBirthday}
                        onChange={updatePetBirthday} />
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
        </>
    );
}

export default BirthDateForm;
