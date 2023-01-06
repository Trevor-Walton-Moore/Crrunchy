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

  if (!user) {
    history.push('/login')
  }

  if (!pet.id) {
    history.push('/')
  }

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
    dispatch(fetchOnePet(user?.id))
    // console.log("FETCHA PET W USE EFFECT")
  }, [dispatch]);

  // useEffect(() => {
  //   console.log("CHECK PET  MAYBE REDIRECT W USE EFFECT", pet)
  //   if (!pet.length) {
  //     history.push('/pet/new');
  //   }
  // }, [pet]);


  return (
    <div className="pet-page-main-container">
      <div className='pet-profile-container'>
        <img
          className='pet-cover-image'
          src={pet.coverImage}
          alt='cover' />
        <div className="icon-image-edit-button">
          <div className="profile-icon-container">
            <img
              className='icon-image'
              src={pet.profileIcon}
              alt='pet-avatar' />
          </div>
          <div>
            <NavLink
              className="edit-button"
              to={`/pet/${pet.id}/edit`}>
              <i class="fa-solid fa-pen" />
              &nbsp;&nbsp;Edit
            </NavLink>
          </div>
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
              to={`/coming-soon`}>
              <i class="fa-solid fa-paw" />
              Overview
            </NavLink>
          </div>
          <div>
            <NavLink
              className="pet-feature"
              to={`/coming-soon`}>
              <i class="fa-solid fa-prescription-bottle-medical" />
              Prescriptions
            </NavLink>
          </div>
          <div>
            <NavLink
              className="pet-feature"
              to={`/coming-soon`}>
              <i class="fa-solid fa-heart" />
              Favorites
            </NavLink>
          </div>
          <div>
            <NavLink
              className="pet-feature"
              to={`/coming-soon`}>
              <i class="fa-solid fa-clipboard-list" />
              Details
            </NavLink>
          </div>
          <div className="line-H"></div>
        </div>
      </div>
    </div>
  );
}
export default Pet;
