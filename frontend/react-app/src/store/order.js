import { useHistory } from 'react-router-dom';

const LOAD_ORDER = "order/LOAD_ORDER";
const CREATE_ORDER = "order/CREATE_ORDER";
const UPDATE_ORDER = "order/UPDATE_ORDER";
const DELETE_ORDER = "order/DELETE_ORDER";

// --- ACTIONS --- //
const loadOrder = (payload) => ({
    type: LOAD_ORDER,
    payload,
});

const createOrder = (payload) => ({
    type: CREATE_ORDER,
    payload,
});

const updateOrder = (payload) => ({
    type: UPDATE_ORDER,
    payload,
});

const deleteOrder = (orderId) => ({
    type: DELETE_ORDER,
    orderId
});

// --- THUNKS --- //
export const fetchOneOrder = (userId) => async (dispatch) => {
    const response = await fetch(`/api/cart/${userId}`, {
        method: "GET",
    });

    if (response.ok) {
        const order = await response.json();
        dispatch(loadOrder(order));
        return order;
    }
};

export const fetchCreateOrder = (productId) => async (dispatch) => {
    const payload = { productId: productId }
    const response = await fetch(`/api/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const payload = await response.json();
        dispatch(createOrder(payload));
        return payload;
    }
};

export const fetchUpdateOrder = (updatedOrder) => async (dispatch) => {
    const response = await fetch(`/api/cart`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedOrder),
    });

    if (response.ok) {
        const payload = await response.json();
        dispatch(updateOrder(payload));
        return payload;
    }
};

export const fetchDeleteOrder = (orderId) => async (dispatch) => {
    const response = await fetch(`/api/cart/${orderId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(deleteOrder(orderId));
        return;
    }
};

export const fetchRemoveOrder = (orderId) => async (dispatch) => {
        dispatch(deleteOrder(orderId));
        return;
};

// --- STATE --- //
const normalize = (arr) => {
    let newObj = {};
    let count = 1
    arr.forEach((ele) => {
        newObj[count] = ele
        count++;
    });
    return newObj;
};

const initialState = {};

// --- REDUCER --- //

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ORDER:
        case CREATE_ORDER:
        case UPDATE_ORDER: {
            const normalizedOrder = normalize(action.payload.orderProducts)

            const updateState = {
                ...state, order: { ...action.payload.order, orderProducts: normalizedOrder }
            };
            return updateState;
        }

        case DELETE_ORDER: {
            let deleteState = {
                ...state,
                order: { ...action.order },
            };
            delete deleteState.order
            return deleteState;
        }
        default:
            return state;
    }
}
