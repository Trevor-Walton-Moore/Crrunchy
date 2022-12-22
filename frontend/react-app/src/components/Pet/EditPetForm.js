import PetForm from './PetForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditPetForm = () => {

    // const { petId } = useParams()
    const pet = useSelector(state => state.pet);

    const editPet = {
        name: pet.name,
        breed: pet.breed,
        weight: pet.weight,
        gender: pet.gender,
        celebrtionDay: pet.celebrtionDay,
        birthday: pet.birthday,
        adoptionDay: pet.adoptionDay,
        coverImage: pet.coverImage,
        profileIcon: pet.profileIcon,
    };

    return (
        <PetForm pet={editPet} formType="edit" />
    );
}

export default EditPetForm;
