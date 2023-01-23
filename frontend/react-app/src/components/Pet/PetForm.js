import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchCreatePet, fetchUpdatePet } from '../../store/pet';
import { fetchDestroyPet } from '../../store/pet';
import { catAvatars, dogAvatars } from './CreatePetForms/ProfileIcons'
import { dogBreeds, catBreeds } from './CreatePetForms/Breeds'
import '../css/Pet.css'

const PetForm = ({ formType }) => {
    const history = useHistory();

    const petId = useParams()

    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const pet = useSelector(state => state.pet);

    if (!pet.id) {
        history.push(`/pet/${petId}`)
    }

    // console.log(pet, 'PET EDIT PET USE STATE')
    const [errors, setErrors] = useState([]);
    const [type, setType] = useState(pet.type);
    const [name, setName] = useState(pet.name);
    const [breed, setBreed] = useState(pet.breed);
    const [weight, setWeight] = useState(pet.weight);
    const [gender, setGender] = useState(pet.gender);
    const [celebrationDay, setCelebrationDay] = useState(pet.celebrationDay);
    const [birthday, setBirthday] = useState(pet.birthday);
    const [adoptionDay, setAdoptionDay] = useState(pet.adoptionDay);
    const [profileIcon, setProfileIcon] = useState(pet.profileIcon);
    let [coverImage, setCoverImage] = useState(pet.coverImage);

    const [isHidden, setIsHidden] = useState(true)

    // const [displayBirthday, setDisplayBirthday] = useState(pet.birthday);
    // const [displayAdoptionDay, setDisplayAdoptionDay] = useState(pet.adoptionDay);

    const [showIconDropdown, setShowIconDropdown] = useState(false);
    const [showBreedDropdown, setShowBreedDropdown] = useState(false);
    const [showGenderDropdown, setShowGenderDropdown] = useState(false);

    const updateName = (e) => setName(e.target.value);
    const updateBreed = (e) => setBreed(e.target.value);
    const updateWeight = (e) => setWeight(e.target.value);
    const updateGender = (e) => setGender(e.target.value);
    // const updateCelebrationDay = (e) => setCelebrationDay(e.target.value);
    const updateBirthday = (e) => setBirthday(e.target.value);
    const updateAdoptionDay = (e) => setAdoptionDay(e.target.value);
    const updateProfileIcon = (e) => setProfileIcon(e.target.value);
    const updateCoverImage = (e) => setCoverImage(e.target.value);

    // console.log(adoptionDay, '!Adoption day use state being updated!')
    // console.log(birthday, '!birthday day use state being updated!')


    useEffect(() => {
        if (!showIconDropdown) { return }
        const closeIconDropdown = (e) => {
            if (e.target.classList.contains('icon-input')) return
            setShowIconDropdown(false);
        };

        document.addEventListener('click', closeIconDropdown);

        return () => document.removeEventListener("click", closeIconDropdown);
    }, [showIconDropdown]);

    const displayIconDropdown = () => {
        if (showIconDropdown) return
        else setShowIconDropdown(true)
    };

    const normalizedIcons = []

    const normalizeIcons = (iconArr) => {
        for (let i = 0; i < iconArr.length; i++) {
            const obj = {}
            obj['id'] = i;
            obj['value'] = iconArr[i]
            normalizedIcons.push(obj)
        }
    }

    useEffect(() => {
        if (!showBreedDropdown) { return }
        const closeBreedDropdown = (e) => {
            if (e.target.classList.contains('breed-input')) return
            setShowBreedDropdown(false);
        };

        document.addEventListener('click', closeBreedDropdown);

        return () => document.removeEventListener("click", closeBreedDropdown);
    }, [showBreedDropdown]);

    const displayBreedDropdown = () => {
        if (showBreedDropdown) return
        else setShowBreedDropdown(true)
    };

    const normalizedBreeds = []

    const normalizeBreeds = (breedArr) => {
        for (let i = 0; i < breedArr.length; i++) {
            const obj = {}
            obj['id'] = i;
            obj['value'] = breedArr[i]
            normalizedBreeds.push(obj)
        }
    }

    useEffect(() => {
        if (!showGenderDropdown) { return }
        const closeGenderDropdown = (e) => {
            if (e.target.classList.contains('gender-input')) return
            setShowGenderDropdown(false);
        };

        document.addEventListener('click', closeGenderDropdown);

        return () => document.removeEventListener("click", closeGenderDropdown);
    }, [showGenderDropdown]);

    const displayGenderDropdown = () => {
        if (showGenderDropdown) return
        else setShowGenderDropdown(true)
    };

    const genders = ['Female', 'Male'];

    const normalizedGenders = []

    const normalizeGenders = (GenderArr) => {
        for (let i = 0; i < GenderArr.length; i++) {
            const obj = {}
            obj['id'] = i;
            obj['value'] = GenderArr[i]
            normalizedGenders.push(obj)
        }
    }

    const convertPetDate = (date) => {
        // console.log('icky date', date)
        const petDate = new Date(date);
        const petMonth = (petDate.getMonth() + 1);
        const petDay = (petDate.getDate() + 1);
        const petYear = (petDate.getFullYear());
        const convertedPetDate = petMonth + "/" + petDay + "/" + petYear;
        // console.log('display date?????????', convertedPetDate)
        return convertedPetDate
    }
    // const updateDisplayBirthday = (e) => setDisplayBirthday(convertPetDate(e.target.value));
    // console.log('display date STATE!!!!!!!', displayBirthday)
    // const updateDisplayAdoptionDay = (e) => setDisplayAdoptionDay(convertPetDate(e.target.value));

    const convertPetDateForComparison = (date) => {
        // console.log('icky date', date)
        const petDate = new Date(date);
        const petMonth = (petDate.getMonth() + 1);
        const petDay = (petDate.getDate());
        const petYear = (petDate.getFullYear());
        const convertedPetDate = petYear + "-" + petMonth + "-" + petDay;
        return convertedPetDate
    }

    useEffect(() => {

        birthday ? setBirthday(convertPetDate(birthday)) :
            setAdoptionDay(convertPetDate(adoptionDay))

    }, [pet]);

    // let clicked = false

    // const handleFirstClick = (date) => {
    //     if (celebrationDay === 'Birthday' && !clicked) {
    //         setBirthday(null)
    //         clicked = true
    //     }

    //     else

    //     if (celebrationDay === 'Adoption Day' && !clicked) {
    //         setAdoptionDay(null)
    //         clicked = true
    //     }
    // }

    // const shortenTime = (time) => {
    //     return +String(time).slice(0, 4)
    // }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // const petDate = birthday ? new Date(birthday) : new Date(adoptionDay);
        // const compareDate = birthday ? new Date(pet?.birthday) : new Date(pet?.adoptionDay);
        // compareDate.setDate(compareDate.getDate() + 1);
        // const petMonth = (petDate.getMonth() + 1);
        // let petDay
        // console.log('@@@@@@@@@@@@@@@@@ pet date:', convertPetDateForComparison(petDate), '===', convertPetDateForComparison(compareDate), '??',
        // convertPetDateForComparison(petDate) === convertPetDateForComparison(compareDate))
        // if (convertPetDateForComparison(petDate) === convertPetDateForComparison(compareDate)) {
        //     petDay = petDate.getDate();
        // } else
        //     petDay = petDate.getDate() + 1;

        // const petYear = (petDate.getFullYear());
        // const convertedPetDate = petMonth + "-" + petDay + "-" + petYear;
        const defaultCoverImage = 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1672688691/Crunchy%20images/cover-photo-default_ztxb2f.png';

        if (!coverImage) coverImage = defaultCoverImage

        // console.log(adoptionDay, "----adoption day useState in handle submit----")
        // console.log(birthday, "----birthday useState in handle submit----")

        if (birthday) {
            const payload = {
                id: pet.id,
                type,
                name,
                breed,
                weight,
                gender,
                celebrationDay,
                birthday,
                profileIcon,
                coverImage,
            };
            const data = await dispatch(fetchUpdatePet(payload))
                .then((data) => {
                    console.log('DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', data)
                    if (data.errors) {
                        console.log('suuuuuuuuuuuuuuuuuh',
                            data)
                        const errArr = [data.errors]
                        setErrors(errArr);
                    }
                    else {
                        console.log('hi :)')
                        history.push(`/pet/${pet.id}`);
                }
                })
        }
        else {
            const payload = {
                id: pet.id,
                type,
                name,
                breed,
                weight,
                gender,
                celebrationDay,
                adoptionDay,
                profileIcon,
                coverImage,
            };
            dispatch(fetchUpdatePet(payload));
            history.push(`/pet/${pet.id}`);
        }
    };

    const handleDestroy = (e) => {
        e.preventDefault();
        dispatch(fetchDestroyPet(pet.id))
        history.push('/')
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        formType === 'edit' && history.push(`/pet/${pet.id}`);
    };

    const showDeleteConfirmation = (e) => {
        e.preventDefault();
        setIsHidden(false)
    };

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

    // console.log('birthday :D', birthday)
    // console.log('adopt day :D', adoptionDay)

    return (
        <form onSubmit={handleSubmit} className='edit-pet-form'>
            <div>
                <div className='top-buttons'>
                    <span className='edit'>Edit</span>
                    <span>
                        <button
                            className="cancelForm"
                            type='button'
                            onClick={(e) => {
                                handleCancelClick(e);
                            }}>
                            Cancel
                        </button>
                    </span>
                </div>
                <div className='icon-label-image'>
                    <label className='edit-label'>
                        Profile Icon
                        <div
                            className="pet-icon-container-edit"
                            onClick={displayIconDropdown}>
                            <img
                                className='icon-image'
                                src={profileIcon}
                                alt='pet-avatar' />
                        </div>
                    </label>
                    {showIconDropdown && (
                        <div className='pet-icons-container-edit'>
                            {type === 'Dog' && (
                                normalizeIcons(dogAvatars),
                                normalizedIcons.map(icon => {
                                    return (
                                        <div
                                            key={icon.id}
                                            className='pet-icon-container'
                                            onClick={() => setProfileIcon(icon.value)}>
                                            <img
                                                className='icon-image'
                                                src={icon.value}
                                                alt='pet-avatar' />
                                        </div>
                                    )
                                })
                            )}
                            {type === 'Cat' && (
                                normalizeIcons(catAvatars),
                                normalizedIcons.map(icon => {
                                    return (
                                        <div
                                            key={icon.id}
                                            className='pet-icon-container'
                                            onClick={() => setProfileIcon(icon.value)}>
                                            <img
                                                className='icon-image'
                                                src={icon.value}
                                                alt='pet-avatar' />
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    )}
                </div>
                <div className='edit-input-padding'>
                    <label className='edit-label'>
                        Cover Photo (URL)
                        <input
                            required
                            className="edit-input bottom"
                            type='URL'
                            value={coverImage}
                            placeholder='Cover Photo'
                            onChange={updateCoverImage} />
                    </label>
                </div>
                <div className='edit-input-padding'>
                    <label className='edit-label'>
                        Pet Name
                        <input
                            required
                            className="edit-input"
                            type='text'
                            value={name}
                            minLength={3}
                            maxLength={20}
                            onChange={updateName} />
                    </label>
                </div>
                <div className='edit-input-padding'>
                    <div>
                        <label className='edit-label'>
                            Breed
                            <input
                                onClick={displayBreedDropdown}
                                required
                                placeholder='Breed'
                                className="edit-breed-input"
                                type='text'
                                value={breed}
                                onChange={updateBreed}
                            />
                        </label>
                    </div>
                </div>
                {showBreedDropdown && (
                    <div className='edit-breed-list'>
                        {type === 'Dog' && (
                            normalizeBreeds(dogBreeds),
                            normalizedBreeds.map(breed => {
                                return (
                                    <div
                                        key={breed.id}
                                        onClick={() => setBreed(breed.value)}
                                        className='breed-list-item'>
                                        {breed.value}
                                    </div>
                                )
                            })
                        )}
                        {type === 'Cat' && (
                            normalizeBreeds(catBreeds),
                            normalizedBreeds.map(breed => {
                                return (
                                    <div
                                        key={breed.id}
                                        onClick={() => setBreed(breed.value)}
                                        className='breed-list-item'
                                    >
                                        {breed.value}
                                    </div>
                                )
                            })
                        )}
                    </div>
                )}

                {/* <input
                        className="input"
                        type='text'
                        value={breed}
                        onChange={updateBreed} /> */}

                <div className='edit-input-padding'>
                    <label className='edit-label'>
                        {'Weight(lbs)'}
                        <input
                            required
                            className="edit-input"
                            type='number'
                            value={weight}
                            min='1'
                            max='300'
                            onChange={updateWeight} />
                    </label>
                </div>
                <div className='edit-input-padding'>
                    <label className='edit-label'>
                        Gender
                        <input
                            required
                            onClick={displayGenderDropdown}
                            className="gender-input"
                            type='text'
                            value={gender}
                            onChange={updateGender} />
                    </label>
                </div>
                {showGenderDropdown && (
                    <div className='gender-list'>
                        {(
                            normalizeGenders(genders),
                            normalizedGenders.map(gender => {
                                return (
                                    <div
                                        key={gender.id}
                                        onClick={() => setGender(gender.value)}
                                        className='breed-list-item'>
                                        {gender.value}
                                    </div>
                                )
                            })
                        )}
                    </div>
                )}
                {/* <label>
                    Celebration Day
                    <input
                        required
                        className="input"
                        type='text'
                        value={celebrationDay}
                        onChange={updateCelebrationDay} />
                </label> */}
                {pet.birthday &&
                    <div>

                        <div className='edit-input-padding'>
                            <label className='edit-label'>
                                {'Birthday (MM/DD/YYYY)'}
                                <input
                                    required
                                    className="edit-input"
                                    value={birthday}
                                    type="text"
                                    // onFocus={(e) => (e.target.type = "date")}
                                    // onBlur={(e) => (e.target.type = "text")}
                                    // onClick={handleFirstClick}
                                    onChange={updateBirthday} />
                            </label>
                        </div>
                        <div>
                            {errors && errors.map((error, ind) => (
                                <div
                                    className='date-error-edit'
                                    key={ind}>
                                    {error}
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {pet.adoptionDay &&
                    <div>

                        <div className='edit-input-padding'>

                            <label className='edit-label'>
                                {'Adoption Day (MM/DD/YYYY)'}
                                <input
                                    required
                                    className="edit-input"
                                    value={adoptionDay}
                                    type="text"
                                    // onFocus={(e) => (e.target.type = "date")}
                                    // onBlur={(e) => (e.target.type = "text")}
                                    // onClick={handleFirstClick}
                                    onChange={updateAdoptionDay} />
                            </label>
                        </div>
                        <div>
                            {errors && errors.map((error, ind) => (
                                <div
                                    className='date-error-edit'
                                    key={ind}>
                                    {error}
                                </div>
                            ))}
                        </div>
                    </div>
                }
                <div className='edit-submit-delete-buttons'>
                    <span>
                        <button className='submit-edit' type="submit">
                            Save Changes
                        </button>
                    </span>
                    {isHidden &&
                        <span>
                            <button className='delete-profile' type="button"
                                onClick={showDeleteConfirmation}>
                                Delete Profile
                            </button>
                        </span>
                    }
                    {!isHidden &&
                        <span>
                            <button className='delete-profile' type="button"
                                onClick={handleDestroy}>
                                Are you sure?
                            </button>
                        </span>
                    }
                </div>
            </div>
        </form >
    );
};

export default PetForm;
