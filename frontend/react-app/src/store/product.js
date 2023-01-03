import { useHistory } from 'react-router-dom';

const LOAD_PRODUCTS = "pet/LOAD_PRODUCTS";

// --- ACTIONS --- //
const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    products,
});

// --- THUNKS --- //
export const fetchAllPRoducts = () => async (dispatch) => {
    const response = await fetch(`/api/products`, {
        method: "GET",
    });

    if (response.ok) {
        const products = await response.json();
        dispatch(loadProducts(products));
        return products;
    }
};

// --- STATE --- //
const normalize = (arr) => {
    let newObj = {};
    arr.forEach((ele) => {
        newObj[ele.id] = ele;
    });
    return newObj;
};

const initialState = {};

// --- REDUCER --- //

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            let normalizedProducts = normalize(action.products);

            const stateNormalized = { ...state, products: normalizedProducts }
            return { ...state, products: normalizedProducts };
        default:
            return state;
    }
}
