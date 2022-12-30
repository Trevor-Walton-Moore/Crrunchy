import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchCreatePet, fetchUpdatePet } from '../../store/pet';
import { fetchDestroyPet } from '../../store/pet';

const PetForm = ({ formType }) => {
    const history = useHistory();

    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const pet = useSelector(state => state.pet);

    console.log(pet, 'PET EDIT PET USE STATE')

    const [type, setType] = useState(pet.type);
    const [name, setName] = useState(pet.name);
    const [breed, setBreed] = useState(pet.breed);
    const [weight, setWeight] = useState(pet.weight);
    const [gender, setGender] = useState(pet.gender);
    const [celebrationDay, setCelebrationDay] = useState(pet.celebrationDay);
    const [birthday, setBirthday] = useState(pet.birthday);
    const [adoptionDay, setAdoptionDay] = useState(pet.adoptionDay);
    const [profileIcon, setProfileIcon] = useState(pet.profileIcon);
    const [coverImage, setCoverImage] = useState(pet.coverImage);

    const updateName = (e) => setName(e.target.value);
    const updateBreed = (e) => setBreed(e.target.value);
    const updateWeight = (e) => setWeight(e.target.value);
    const updateGender = (e) => setGender(e.target.value);
    // const updateCelebrationDay = (e) => setCelebrationDay(e.target.value);
    const updateBirthday = (e) => setBirthday(e.target.value);
    const updateAdoptionDay = (e) => setAdoptionDay(e.target.value);
    const updateProfileIcon = (e) => setProfileIcon(e.target.value);
    const updateCoverImage = (e) => setCoverImage(e.target.value);

    console.log(adoptionDay, '!Adoption day use state being updated!')
    console.log(birthday, '!birthday day use state being updated!')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const petDate = birthday ? new Date(birthday) : new Date(adoptionDay);
        const petMonth = (petDate.getMonth() + 1)
        const petDay = (petDate.getDate() + 1)
        const petYear = (petDate.getFullYear())
        const convertedPetDate = petMonth + "-" + petDay + "-" + petYear

        console.log(adoptionDay, "----adoption day useState in handle submit----")
        console.log(birthday, "----birthday useState in handle submit----")

        if (birthday) {
            const payload = {
                id: pet.id,
                type,
                name,
                breed,
                weight,
                gender,
                celebrationDay,
                birthday: convertedPetDate.toString(),
                profileIcon,
                coverImage,
            };
            dispatch(fetchUpdatePet(payload));
            history.push(`/pet/${pet.id}`);
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
                adoptionDay: convertedPetDate.toString(),
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
        <form onSubmit={handleSubmit} className='petForm'>
            <div>
                <div>Edit</div>
                <button
                    className="cancelForm"
                    type='button'
                    onClick={(e) => {
                        handleCancelClick(e);
                    }}>
                    <span>Cancel</span>
                </button>
                <label>
                    Profile Icon
                    <input
                        className="input bottom"
                        type='URL'
                        value={profileIcon}
                        onChange={updateProfileIcon} />
                </label>
                <label>
                    Cover Photo
                    <input
                        className="input bottom"
                        type='URL'
                        value={coverImage}
                        placeholder='Insert URL'
                        onChange={updateCoverImage} />
                </label>
                <label>
                    Pet Name
                    <input
                        // required
                        className="input"
                        type='text'
                        value={name}
                        minLength={3}
                        maxLength={20}
                        onChange={updateName} />
                </label>
                <label>
                    Breed Type
                    <input
                        className="input"
                        type='text'
                        value={breed}
                        onChange={updateBreed} />
                </label>
                <label>
                    {'Weight(lbs)'}
                    <input
                        // required
                        className="input"
                        type='number'
                        value={weight}
                        min='1'
                        max='300'
                        onChange={updateWeight} />
                </label>
                <label>
                    Gender
                    <input
                        // required
                        className="input"
                        type='text'
                        value={gender}
                        onChange={updateGender} />
                </label>
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
                    <label>
                        {'Birthday (MM/DD/YYYY)'}
                        <input
                            className="input"
                            type='date'
                            value={birthday}
                            onChange={updateBirthday} />
                    </label>
                }
                {pet.adoptionDay &&
                    <label>
                        {'Adoption Day (MM/DD/YYYY)'}
                        <input
                            className="input"
                            type='date'
                            value={adoptionDay}
                            onChange={updateAdoptionDay} />
                    </label>
                }
                <button className='submitForm' type="submit">
                    <span>Save Changes</span>
                </button>
                <button className='' type="button"
                    onClick={handleDestroy}>
                    <span>Delete Profile</span>
                </button>
            </div>
        </form >
    );
};

export default PetForm;
