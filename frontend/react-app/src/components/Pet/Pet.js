import React, { useState, useEffect } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOnePet } from "../../store/pet";
import "../css/Pet.css";


function Pet() {
  const history = useHistory()
  const petId = useParams()
  console.log(petId)

  const user = useSelector((state) => state.session.user);
  const pet = useSelector((state) => state.pet);

  // const date = new Date()
  // console.log("DATE", date, 'BDAY', new Date(pet.birthday))
  // const age = date - pet?.birthday

  const birthDate = new Date(pet.birthday);
  const birthDateToStr = birthDate.toDateString();
  const birthMonthStr = birthDateToStr.slice(3, 7);
  const birthMonth = (birthDate.getMonth() + 1)
  const birthDay = (birthDate.getDate() + 1)
  const birthYear = (birthDate.getFullYear())
  const convertedBirthDate = birthMonth + "/" + birthDay + "/" + birthYear

  const nowDate = new Date()
  const nowMonth = (nowDate.getMonth() + 1)
  const nowDay = (nowDate.getDate() + 1)
  const nowYear = (nowDate.getFullYear())
  const convertedNowDate = nowMonth + "/" + nowDay + "/" + nowYear

  var ageYear = nowYear - birthYear;

  nowMonth < birthMonth && ageYear--;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOnePet(user.id))
    console.log("FETCHA PET W USE EFFECT")
  }, [dispatch]);

  return (
    <div className="main-container">
      <img src={pet.profileIcon} alt='pet-avatar' />
      <div className="pet-name">{pet.name}</div>
      {
        pet.celebrationDay === "Birthday" &&
        <>
        <span className="feature-container">
          <div className="feature">{birthMonthStr}&nbsp;{birthDay}</div>
          <div className="feature-label">Birthday</div>
        </span>
        <span className="feature-container">
          <div className="feature">{ageYear}&nbsp;Yr</div>
          <div className="feature-label">Age</div>
        </span>
        </>
      }
      {
        pet.celebrationDay === "Adoption Day" &&
        <span className="feature-container">
          <div className="feature">{pet.adoptionDay}</div>
          <div className="feature-label">Adoption Day</div>
        </span>
      }
      <span className="feature-container">
        <div className="feature">{pet.weight}&nbsp;lbs</div>
        <div className="feature-label">Weight</div>
      </span>

      <NavLink to={`/pet/${petId.petId}/edit`}>Edit! That! Pet!</NavLink>

    </div>
  );
}
export default Pet;
