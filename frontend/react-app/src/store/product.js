import { useHistory } from 'react-router-dom';

const LOAD_PRODUCTS = "products/LOAD_PRODUCTS";

// --- ACTIONS --- //
const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    products,
});

// --- THUNKS --- //
export const fetchAllProducts = () => async (dispatch) => {
    const response = await fetch(`/api/products`, {
        method: "GET",
    });

    if (response.ok) {
        const res = await response.json();
        // console.log('PRODUCT RESPONSE', res.products)
        dispatch(loadProducts(res.products));
        return res.products;
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
            // console.log(action, "ALL PRODUCTSS ACTIONNNNNNNN")
            let normalizedProducts = normalize(action.products);

            const stateNormalized = { ...state, ...normalizedProducts }
            return stateNormalized;
        default:
            return state;
    }
}
