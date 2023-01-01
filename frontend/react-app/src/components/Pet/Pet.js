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
    <div className="pet-page-main-container">
      <span className='pet-profile-container'>
        <div className="chosen-icon-container">
          <img
            className='icon-image'
            src={pet.profileIcon}
            alt='pet-avatar' />
        </div>
        <div className="pet-name">{pet.name}</div>

        <div className="pet-details-container">
          {
            pet.celebrationDay === "Birthday" &&
            <span>
              <span className="pet-detail-container">
                <div className="feature">{petDateObj['month']}&nbsp;{petDateObj['day']}</div>
                <div className="feature-label">Birthday</div>
              </span>
              <span className="line-V"></span>
              <span className="pet-detail-container">
                <div className="feature">{ageYear}&nbsp;Yr</div>
                <div className="feature-label">Age</div>
              </span>
            </span>
          }
          {
            pet.celebrationDay === "Adoption Day" &&
            <span className="pet-detail-container">
              <div className="detail">{petDateObj['month']}&nbsp;{petDateObj['day']}</div>
              <div className="detail-label">Adoption Day</div>
            </span>
          }
          <span className="line-V"></span>
          <span className="pet-detail-container">
            <div className="detail">{pet.weight}&nbsp;lbs</div>
            <div className="detail-label">Weight</div>
          </span>
          <div className="line-H"></div>
          <div>
            <NavLink
              className="pet-feature"
              to={`/pet/${pet.id}/edit`}>
              Overview
            </NavLink>
          </div>
          <div>
            <NavLink
              className="pet-feature"
              to={`/coming-soon`}>
              Prescriptions
            </NavLink>
          </div>
          <div>
            <NavLink
              className="pet-feature"
              to={`/coming-soon`}>
              Favorites
            </NavLink>
          </div>
          <div>
            <NavLink
              className="pet-feature"
              to={`/coming-soon`}>
              Details
            </NavLink>
          </div>
          <div>
            <NavLink
              className="pet-feature"
              to={`/pet/${pet.id}/edit`}>
              Edit
            </NavLink>
          </div>
          <div className="line-H"></div>
        </div>
      </span>
    </div>
  );
}
export default Pet;
