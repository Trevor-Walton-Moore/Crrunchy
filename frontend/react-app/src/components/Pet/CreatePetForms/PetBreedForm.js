import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'
import { dogBreeds, catBreeds } from './Breeds'
import '../../css/CreatePet.css'


function PetBreedForm() {
    const history = useHistory()

    const user = useSelector(state => state.session.user)

    if (!user) {
        history.push('/login')
    }

    const { petBreed, setPetBreed, petName, petType } = usePet()
    console.log(petBreed, "PET BREED")

    if (!petType) {
        history.push('/pet/new')
    }

    const updateBreed = (e) => setPetBreed(e.target.value);

    const handleSubmit = async () => {
        history.push('/pet/new/avatar-selection')
    }

    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (!showDropdown) { return }
        const closeDropdown = (e) => {
            if (e.target.classList.contains('breed-input')) return
            setShowDropdown(false);
        };

        document.addEventListener('click', closeDropdown);

        return () => document.removeEventListener("click", closeDropdown);
    }, [showDropdown]);

    const displayDropdown = () => {
        if (showDropdown) return
        else setShowDropdown(true)
    };

    const normalizedBreeds = []

    const normalizeBreeds = (breedArr) => {
        for (let i = 0; i < breedArr.length; i++) {
            const obj = {}
            obj['id'] = i;
            obj['value'] = breedArr[i]
            normalizedBreeds.push(obj)
        }
        // return console.log(normalizedBreeds, "nOrMaLiZeD BREEEDS")
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
                        onClick={() => history.push('/pet/new/pet-name')}>
                        <i class="fa-solid fa-chevron-left" />
                    </div>
                    <div className='back-button close-button'
                        onClick={() => history.push('/')}>
                        <i class="fa-solid fa-xmark" />
                    </div>
                </div>
                <div
                    className='sub-text'>
                    {`Hi there, ${petName}👋`}
                </div>
                <div
                    className='pet-prompt'>
                    {`What is ${petName}'s breed?`}
                </div>
                <form
                    className='create-pet-form'
                    onSubmit={handleSubmit}>
                    <input
                        onClick={displayDropdown}
                        required
                        placeholder='Breed'
                        className="breed-input"
                        type='text'
                        value={petBreed}
                        onChange={updateBreed}
                    />
                    {showDropdown && (
                        <div className='breed-list'>
                            {petType === 'Dog' && (
                                normalizeBreeds(dogBreeds),
                                normalizedBreeds.map(breed => {
                                    return (
                                        <div
                                            key={breed.id}
                                            onClick={() => setPetBreed(breed.value)}
                                            className='breed-list-item'>
                                            {breed.value}
                                        </div>
                                    )
                                })
                            )}
                            {petType === 'Cat' && (
                                normalizeBreeds(catBreeds),
                                normalizedBreeds.map(breed => {
                                    return (
                                        <div
                                            key={breed.id}
                                            onClick={() => setPetBreed(breed.value)}
                                            className='breed-list-item'>
                                            {breed.value}
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    )}
                    <button
                        className='unsure-of-breed'
                        type='button'
                        onClick={() => {
                            setPetBreed('Unknown');
                            handleSubmit();
                        }}>
                        I'm not sure of the breed
                    </button>
                    <button
                        className='continue-button'>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PetBreedForm;
