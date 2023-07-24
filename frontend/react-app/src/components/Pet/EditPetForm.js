import PetForm from './PetForm';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditPetForm = () => {
    const history = useHistory()

    // const { petId } = useParams()
    const pet = useSelector(state => state.pet);
    const user = useSelector(state => state.session.user)

    if (!user) {
        history.push('/login')
    }

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
