import React, { useState, useEffect } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOnePet } from "../../store/pet";
import "../css/Pet.css";


function Pet() {
  const history = useHistory();

  const dispatch = useDispatch();

  const defaultCoverImage = 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1672688691/Crunchy%20images/cover-photo-default_ztxb2f.png'

  const user = useSelector((state) => state.session.user);
  const pet = useSelector((state) => state.pet);

  if (!user) {
    history.push('/login')
  }

  if (!pet) {
    history.push('/')
  }


  // const date = new Date()
  // const age = date - pet?.birthday

  const petDateObj = {}

  const getPetDateInfo = (celebrationDay) => {

    const petDate = new Date(celebrationDay);
    const petDateToStr = petDate.toDateString();
    const petMonthStr = petDateToStr.slice(3, 7);
    // const petMonth = (petDate.getMonth() + 1);
    const petDay = (petDate.getDate());
    // const petYear = (petDate.getFullYear());
    // const convertedPetDate = petMonth + "/" + petDay + "/" + petYear;

    petDateObj['month'] = petMonthStr;
    petDateObj['day'] = petDay;
    // petDateObj['year'] = petYear;
    // petDateObj['date'] = convertedPetDate;
  }

  pet.birthday ? getPetDateInfo(pet.birthday) : getPetDateInfo(pet.adoptionDay)

  // const nowDate = new Date();
  // const nowMonth = (nowDate.getMonth() + 1);
  // const nowDay = (nowDate.getDate());
  // const nowYear = (nowDate.getFullYear());
  // const convertedNowDate = nowMonth + '/' + nowDay + '/' + nowYear;

  // var ageYear = nowYear - petDateObj['year'];

  // nowMonth < petDateObj['month'] && ageYear--;

  useEffect(() => {
    dispatch(fetchOnePet(user?.id))
  }, [dispatch]);

  const useDefaultImage = (e) => {
    e.target.src = defaultCoverImage
  }

  // useEffect(() => {
  //   if (!pet.length) {
  //     history.push('/pet/new');
  //   }
  // }, [pet]);


  return (
    <div className="pet-page-main-container">
      <div className='pet-profile-container'>
        <div className='pet-cover-image-container'>
          <img
            className='pet-cover-image'
            src={pet.coverImage}
            onError={useDefaultImage}
            alt='cover' />
        </div>
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
        <div className='pet-left-and-right-container'>
          <div className='pet-name-details-menu-container'>
            <div className="pet-name">{pet.name}</div>
            <div className="pet-details-menu-container">
              <div style={{ 'display': 'flex', 'flex-direction': 'column' }}>

                <div className='pet-details-container'>
                  {
                    pet.celebrationDay === "Birthday" &&
                    <div style={{ 'display': 'flex' }}>
                      <div className="pet-detail-container">
                        <div className="detail">{petDateObj['month']}&nbsp;{petDateObj['day']}</div>
                        <div className="detail-label">Birthday</div>
                      </div>
                      {/* <div className="line-V" />
                      <div className="pet-detail-container">
                        <div className="detail">{ageYear}&nbsp;Yr</div>
                        <div className="detail-label">Age</div>
                      </div> */}
                    </div>
                  }
                  {
                    pet.celebrationDay === "Adoption Day" &&
                    <span className="pet-detail-container">
                      <div className="detail">{petDateObj['month']}&nbsp;{petDateObj['day']}</div>
                      <div className="detail-label">Adoption Day</div>
                    </span>
                  }
                  <div className="line-V" />
                  <span className="pet-detail-container">
                    <div className="detail">{pet.weight}&nbsp;lbs</div>
                    <div className="detail-label">Weight</div>
                  </span>
                </div>
                <div className="line-H" />
              </div>
              <div className='pet-menu'>
                <NavLink
                  className="pet-feature"
                  to={`/coming-soon`}>
                  <div className='icon-and-text'>
                    <div class="feature-icon-container">
                      <i class="fa-solid fa-paw feature-icon" />
                    </div>
                    <span className='feature-text'>
                      Overview
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  className="pet-feature"
                  to={`/coming-soon`}>
                  <div className='icon-and-text'>
                    <div class="feature-icon-container">
                      <i class="fa-solid fa-prescription-bottle-medical feature-icon" />
                    </div>
                    <span className='feature-text'>
                      Prescriptions
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  className="pet-feature"
                  to={`/coming-soon`}>
                  <div className='icon-and-text'>
                    <div class="feature-icon-container">
                      <i class="fa-solid fa-heart feature-icon" />
                    </div>
                    <span className='feature-text'>
                      Favorites
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  className="pet-feature-details"
                  to={`/coming-soon`}>
                  <div className='icon-and-text'>
                    <div class="feature-icon-container">
                      <i class="fa-solid fa-clipboard-list" />
                    </div>
                    <span className='feature-text'>
                      Details
                    </span>
                  </div>
                </NavLink>
                <div className="line-H" />
              </div>
            </div>
          </div>
          <div className='all-pet-details-container'>
            <div className='pet-name detail-page-title'>
              Details
            </div>
            <div className='detail-page-detail-label-container'>
              <div className='detail-page-detail-label'>
                <div className='detail-page-label'>
                  Breed
                </div>
                <div className='detail-page-detail'>
                  {pet.breed}
                </div>
              </div>
              <div className="line-H-detail-page" />
              <div className='detail-page-detail-label'>
                <div className='detail-page-label'>
                  Weight
                </div>
                <div className='detail-page-detail'>
                  {`${pet.weight} lbs`}
                </div>
              </div>
              <div className="line-H-detail-page" />
              <div className='detail-page-detail-label'>
                <div className='detail-page-label'>
                  Gender
                </div>
                <div className='detail-page-detail'>
                  {pet.gender}
                </div>
              </div>
              <div className="line-H-detail-page" />
              {pet.celebrationDay === "Birthday" &&
                <div className='detail-page-detail-label'>
                  <div className='detail-page-label'>
                    Birthday
                  </div>
                  <div className='detail-page-detail'>
                    {pet.birthday}
                  </div>
                </div>
              }
              {pet.celebrationDay === "Adoption Day" &&
                <div className='detail-page-detail-label'>
                  <div className='detail-page-label'>
                    Adoption Day
                  </div>
                  <div className='detail-page-detail'>
                    {pet.adoptionDay}
                  </div>
                </div>
              }
              <div className="line-H-detail-page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pet;
