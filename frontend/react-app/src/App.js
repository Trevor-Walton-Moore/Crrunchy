import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Pet from './components/Pet/Pet';
import { authenticate } from './store/session';
import EditPetForm from './components/Pet/EditPetForm';
import PetForm from './components/Pet/PetForm';
import PetTypeForm from './components/Pet/CreatePetForms/PetTypeForm';
import PetNameForm from './components/Pet/CreatePetForms/PetNameForm';
import PetBreedForm from './components/Pet/CreatePetForms/PetBreedForm';
// import CatBreedForm from './components/Pet/CreatePetForms/CatBreedForm';
import PetWeightForm from './components/Pet/CreatePetForms/PetWeightForm';
import PetGenderForm from './components/Pet/CreatePetForms/GenderForm';
import CelebrationDayForm from './components/Pet/CreatePetForms/CelebrationDayForm';
import BirthDateForm from './components/Pet/CreatePetForms/BirthDateForm';
import AdoptionDateForm from './components/Pet/CreatePetForms/AdoptionDateForm';
import Welcome from './components/Pet/CreatePetForms/Welcome';
import ProfileIconForm from './components/Pet/CreatePetForms/ProfileIconForm';
import Home from './components/Home'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/' exact={true} >
          <Home />
        </Route>
        <Route path='/pet/:petId/edit' >
          <EditPetForm />
        </Route>
        <Route path='/pet/new' exact={true} >
          <PetTypeForm />
        </Route>
        <Route path='/pet/new/pet-name' exact={true} >
          <PetNameForm />
        </Route>
        <Route path='/pet/new/breed-selection' exact={true} >
          <PetBreedForm />
        </Route>
        {/* <Route path='/pet/new/breed-selection-cat' exact={true} >
          <CatBreedForm />
        </Route> */}
        <Route path='/pet/new/avatar-selection' exact={true} >
          <ProfileIconForm />
        </Route>
        <Route path='/pet/new/pet-weight' exact={true} >
          <PetWeightForm />
        </Route>
        <Route path='/pet/new/pet-gender' exact={true} >
          <PetGenderForm />
        </Route>
        <Route path='/pet/new/celebration-type' exact={true} >
          <CelebrationDayForm />
        </Route>
        <Route path='/pet/new/birthday-date' exact={true} >
          <BirthDateForm />
        </Route>
        <Route path='/pet/new/adoption-date' exact={true} >
          <AdoptionDateForm />
        </Route>
        <Route path='/pet/new/welcome' exact={true} >
          <Welcome />
        </Route>
        <Route path='/pet/:petId' exact={true} >
          <Pet />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
