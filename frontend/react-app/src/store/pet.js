import { useHistory } from 'react-router-dom';

const LOAD_PET = "pet/LOAD_PET";
const CREATE_PET = "pet/CREATE_SERVER";
const UPDATE_PET = "pet/UPDATE_SERVER";
const DESTROY_PET = "pet/DESTROY_PET";

// --- ACTIONS --- //
const loadPet = (pet) => ({
    type: LOAD_PET,
    pet,
});

const createPet = (pet) => ({
    type: CREATE_PET,
    pet,
});

const updatePet = (pet) => ({
    type: UPDATE_PET,
    pet,
});

const destroyPet = (pet) => ({
    type: DESTROY_PET,
    pet,
});

// --- THUNKS --- //
export const fetchOnePet = (ownerId) => async (dispatch) => {
    const response = await fetch(`/api/pet/${ownerId}`, {
        method: "GET",
    });

    if (response.ok) {
        const pet = await response.json();
        dispatch(loadPet(pet));
        return pet;
    }
};

export const fetchCreatePet = (pet) => async (dispatch) => {
    console.log("CREATE PET CREATE PET", pet)
    const response = await fetch(`/api/pet`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
    });

    if (response.ok) {
        const newPet = await response.json();
        console.log('CREATE PET SUCCESFULL', newPet)
        dispatch(createPet(newPet));
        // const history = useHistory();
        // history.push(`/pet/${newPet.id}`)
        return newPet;
    }
};

export const fetchUpdatePet = (updatedPet) => async (dispatch) => {
    // console.log('UPDARED PET BEFORE THUNKIN', updatedPet)
    const response = await fetch(`/api/pet/${updatedPet.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPet),
    });

    if (response.ok) {
        const updatedPet = await response.json();

        dispatch(updatePet(updatedPet));
        return updatedPet;
    }
};

export const fetchDestroyPet = ({ pet }) => async (dispatch) => {
    const response = await fetch(`/api/pet/${pet.id}`, {
        method: "DELETE",
    });

    if (response.ok) {

        dispatch(destroyPet(pet));
        return pet;
    }
};

// --- INITIAL STATE --- //
// const normalize = (arr) => {
//     let obj = {};
//     arr.forEach((ele) => {
//         obj[ele.id] = ele;
//     });
//     return obj;
// };

const initialState = { pet: {} };

// --- REDUCER --- //

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PET:
            const newState = { ...state, ...action.pet }
            return newState;

        case CREATE_PET:
          const createState = {
            ...state,
            pet: { ...action.pet},
          };
          return createState;

        case UPDATE_PET: {
          const updateState = {
            ...state,
            pet: { ...action.pet },
          };
          return updateState;
        }

        case DESTROY_PET: {
          const deleteState = {
            ...state,
            pet: { ...state.pet },
          };
          deleteState.pet = {};
          return deleteState;
        }
        default:
            return state;
    }
}
