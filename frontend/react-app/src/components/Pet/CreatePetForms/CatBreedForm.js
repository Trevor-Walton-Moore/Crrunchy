import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'
import { catBreeds } from './Breeds'


function CatBreedForm() {
    const history = useHistory()

    const { petBreed, setPetBreed, petName } = usePet()

    // const updateBreed = (e) => setPetBreed(e.target.value);

    const handleSubmit = async () => {
        history.push('/pet/new/avatar-selection')
    }

    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (!showDropdown) { return }
        const closeDropdown = () => {
            setShowDropdown(false);
        };

        document.addEventListener('click', closeDropdown);

        return () => document.removeEventListener("click", closeDropdown);
    }, [showDropdown]);

    const displayDropdown = () => {
        if (showDropdown) return
        else setShowDropdown(true)
    };

    // const checkBreed = (e) => {
    //     const flag = 0;
    //     for (let breed in catBreeds) {
    //         breed === e.target.value && flag++;
    //     }
    //     flag === 0 && (<div>No breed found.</div>)
    // }

    const normalizedBreeds = []

    const normalizeBreeds = (breedArr) => {
        for (let i = 0; i < breedArr.length; i++) {
            const obj = {}
            obj['id'] = i;
            obj['value'] = breedArr[i]
            normalizedBreeds.push(obj)
        }
    }

    return (
        <>
            <div className='pet-form-container'>
                <div className='back-button'
                    onClick={() => history.push('/pet/new/pet-name')}>
                    {'<'}
                </div>
                <div>{`What is ${petName}'s breed?`}</div>
                <input
                    onClick={displayDropdown}
                    required
                    placeholder='Breed'
                    className="input"
                    type='text'
                    value={petBreed}
                // onChange={checkBreed}
                />
                <div className='breed-list'>
                    {showDropdown && (
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
                <button
                    type='button'
                    onClick={() => {
                        setPetBreed('Unknown');
                        handleSubmit();
                    }}>
                    I'm not sure of the breed
                </button>
                <button onClick={handleSubmit}>
                    Continue
                </button>
            </div>
        </>
    );
}

export default CatBreedForm;
