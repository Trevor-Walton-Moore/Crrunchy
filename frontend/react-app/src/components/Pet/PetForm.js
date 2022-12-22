import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCreatePet, fetchUpdatePet } from '../../store/pet';

const PetForm = ({ pet, formType }) => {
    console.log("ONSIDE EDITTTTTTTTT")

    const petId = pet.id;

    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const history = useHistory();

    const [name, setName] = useState(pet.name);
    const [breed, setBreed] = useState(pet.breed);
    const [weight, setWeight] = useState(pet.weight);
    const [gender, setGender] = useState(pet.gender);
    const [celebrationDay, setCelebrationDay] = useState(pet.celebrationDay);
    const [birthday, setBirthday] = useState(pet.birthday);
    // const [adoptionDay, setAdoptionDay] = useState(pet.adoptionDay);
    const [profileIcon, setProfileIcon] = useState(pet.profileIcon);
    const [coverImage, setCoverImage] = useState(pet.coverImage);

    const updateName = (e) => setName(e.target.value);
    const updateBreed = (e) => setBreed(e.target.value);
    const updateWeight = (e) => setWeight(e.target.value);
    const updateGender = (e) => setGender(e.target.value);
    const updateCelebtrationDay = (e) => setCelebrationDay(e.target.value);
    const updateBirthday = (e) => setBirthday(e.target.value);
    // const updateAdoptionDay = (e) => setAdoptionDay(e.target.value);
    const updateProfileIcon = (e) => setProfileIcon(e.target.value);
    const updateCoverImage = (e) => setCoverImage(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: petId,
            name,
            breed,
            weight,
            gender,
            celebrationDay,
            birthday,
            // adoptionDay,
            profileIcon,
            coverImage,
        };

        console.log('payload oF A PET. A PET', payload)

        if (formType === "create") {
            dispatch(fetchCreatePet(payload));
            // setHidden(true);
            history.push(`/pet/${petId}`);
        } else {
            dispatch(fetchUpdatePet(payload));
            history.push(`/pet/${petId}`);
        }
    };

    if (formType === "create") {
        handleSubmit()
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        formType === 'Edit Spot' && history.push(`/pet/${petId}`);
    };

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
                        required
                        className="input bottom"
                        type='URL'
                        value={profileIcon}
                        onChange={updateProfileIcon} />
                </label>
                <label>
                    Cover Photo
                    <input
                        required
                        className="input bottom"
                        type='URL'
                        value={coverImage}
                        onChange={updateCoverImage} />
                </label>
                <button type='button'>
                    Upload a Photo
                </button>
                <label>
                    Pet Name
                    <input
                        required
                        className="input"
                        type='text'
                        value={name}
                        maxLength={50}
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
                        required
                        className="input"
                        type='number'
                        value={weight}
                        onChange={updateWeight} />
                </label>
                <label>
                    Gender
                    <input
                        required
                        placeholder='state'
                        className="input"
                        type='text'
                        value={gender}
                        onChange={updateGender} />
                </label>
                <label>
                    Celebration Day
                    <input
                        required
                        className="input"
                        type='text'
                        value={celebrationDay}
                        onChange={updateCelebtrationDay} />
                </label>
                <label>
                    {'Birthday (MM/DD/YYYY)'}
                    <input
                        placeholder='price'
                        className="input"
                        type='number'
                        min={0}
                        value={birthday}
                        onChange={updateBirthday} />
                </label>
                {/* <label>
                    Adoption Day
                    <input
                        className="input"
                        type='text'
                        value={adoptionDay}
                        onChange={updateAdoptionDay} />
                </label> */}
                <button className='submitForm' type="submit">
                    <span>Save Changes</span>
                </button>
                <button className='submitForm' type="button">
                    <span>Delete Profile</span>
                </button>
            </div>
        </form >
    );
};

export default PetForm;
