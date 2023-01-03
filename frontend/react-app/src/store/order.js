import { useHistory } from 'react-router-dom';

const LOAD_ORDER = "order/LOAD_ORDER";
const CREATE_ORDER = "order/CREATE_ORDER";
const UPDATE_ORDER = "order/UPDATE_ORDER";
const DELETE_ORDER = "order/DELETE_ORDER";

// --- ACTIONS --- //
const loadOrder = (order) => ({
    type: LOAD_ORDER,
    order,
});

const createOrder = (order) => ({
    type: CREATE_ORDER,
    order,
});

const updateOrder = (order) => ({
    type: UPDATE_ORDER,
    order,
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
    console.log("CREATE CART PRODUCT IDDD", productId)
    const payload = { productId: productId }
    const response = await fetch(`/api/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const newOrder = await response.json();
        console.log('CREATE ORDER SUCCESFULL', newOrder)
        dispatch(createOrder(newOrder));
        return newOrder;
    }
};

export const fetchUpdateOrder = (updatedPet) => async (dispatch) => {
    console.log('UPDARED PET BEFORE THUNKIN', updatedPet)
    const response = await fetch(`/api/cart/${updatedPet.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPet),
    });

    if (response.ok) {
        const updatedOrder = await response.json();

        dispatch(updateOrder(updatedOrder));
        return updatedOrder;
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

const initialState = {};

// --- REDUCER --- //

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ORDER:
            const newState = {
                ...state,
                ...action.order,
            };
            return newState;

        case CREATE_ORDER:
            // console.log('create order ACTION', action)
            const createState = {
                ...state, ...action.order.order
            };
            return createState;

        case UPDATE_ORDER: {
            const updateState = {
                ...state, ...action.order,
            };
            return updateState;
        }

        case DELETE_ORDER: {
            console.log('ACTION', action)
            let deleteState = {
                ...state,
                order: { ...action.order },
            };
            // console.log('DELETE state BEFORE', deleteState)
            deleteState = {}
            // console.log('DELETE state AFTER', deleteState)
            return deleteState;
        }
        default:
            return state;
    }
}
