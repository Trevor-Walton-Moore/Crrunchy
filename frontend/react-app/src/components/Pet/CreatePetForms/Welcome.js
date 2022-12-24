import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePet } from '../../../Context'


function Welcome() {
    const history = useHistory()

    const pet = useSelector((state) => state.pet.pet.pet);

    console.log(pet,'PET USE STATE IN WELOME PAGE')

    const { petName, petProfileIcon } = usePet()

    return (
        <>
            <div className='pet-form-container'>
                <div>{`Welcome to the Chrunchy pack, ${petName}!`}</div>
                <button className=''
                    onClick={() => history.push(`/coming-soon`)}>
                        Tell Us More
                </button>
                <button className=''
                    onClick={() => history.push(`/pet/${pet.id}`)}>
                        I'll Do This Later
                </button>
            </div>
        </>
    );
}

export default Welcome;
