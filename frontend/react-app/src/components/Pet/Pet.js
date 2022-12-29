import React, { useState, useEffect } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOnePet } from "../../store/pet";
import "../css/Pet.css";


function Pet() {
  const history = useHistory();

  const dispatch = useDispatch();
  // const petId = useParams()
  // console.log(petId)

  const user = useSelector((state) => state.session.user);
  const pet = useSelector((state) => state.pet);

  // const date = new Date()
  // console.log("DATE", date, 'BDAY', new Date(pet.birthday))
  // const age = date - pet?.birthday

  const petDateObj = {}

  const getPetDateInfo = (celebrationDay) => {

    const petDate = new Date(celebrationDay);
    const petDateToStr = petDate.toDateString();
    const petMonthStr = petDateToStr.slice(3, 7);
    const petMonth = (petDate.getMonth() + 1);
    const petDay = (petDate.getDate() + 1);
    const petYear = (petDate.getFullYear());
    const convertedPetDate = petMonth + "/" + petDay + "/" + petYear;

    petDateObj['month'] = petMonthStr;
    petDateObj['day'] = petDay;
    petDateObj['year'] = petYear;
    petDateObj['date'] = convertedPetDate;
  }

  pet.birthday ? getPetDateInfo(pet.birthday) : getPetDateInfo(pet.adoptionDay)

  const nowDate = new Date();
  const nowMonth = (nowDate.getMonth() + 1);
  const nowDay = (nowDate.getDate() + 1);
  const nowYear = (nowDate.getFullYear());
  const convertedNowDate = nowMonth + '/' + nowDay + '/' + nowYear;

  var ageYear = nowYear - petDateObj['year'];

  nowMonth < petDateObj['month'] && ageYear--;

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
            <div className="feature">{petDateObj['month']}&nbsp;{petDateObj['day']}</div>
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
          <div className="feature">{petDateObj['month']}&nbsp;{petDateObj['day']}</div>
          <div className="feature-label">Adoption Day</div>
        </span>
      }
      <span className="feature-container">
        <div className="feature">{pet.weight}&nbsp;lbs</div>
        <div className="feature-label">Weight</div>
      </span>

      <NavLink to={`/pet/${pet.id}/edit`}>Edit! That! Pet!</NavLink>

    </div>
  );
}
export default Pet;
