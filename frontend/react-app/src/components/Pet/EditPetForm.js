import PetForm from './PetForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditPetForm = () => {

    // const { petId } = useParams()
    const pet = useSelector(state => state.pet);

    console.log('edit pet', pet)

    const editPet = {
        id: pet.id,
        type: pet.type,
        name: pet.name,
        breed: pet.breed,
        weight: pet.weight,
        gender: pet.gender,
        celebrationDay: pet.celebrationDay,
        birthday: pet.birthday,
        adoptionDay: pet.adoptionDay,
        profileIcon: pet.profileIcon,
        coverImage: pet.coverImage,
    };

    return (
        <PetForm pet={editPet} formType="edit" />
    );
}

export default EditPetForm;
