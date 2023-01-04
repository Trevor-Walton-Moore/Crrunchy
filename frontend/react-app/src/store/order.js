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
        // console.log('load order res OK and res order: ', order)
        dispatch(loadOrder(order));
        return order;
    }
};

export const fetchCreateOrder = (productId) => async (dispatch) => {
    // console.log("CREATE CART PRODUCT IDDD", productId)
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
        // console.log('CREATE ORDER SUCCESFULL', payload)
        dispatch(createOrder(payload));
        return payload;
    }
};

export const fetchUpdateOrder = (updatedOrder) => async (dispatch) => {
    console.log('UPDARED ORDER BEFORE THUNKIN', updatedOrder)
    const response = await fetch(`/api/cart`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedOrder),
    });

    if (response.ok) {
        const payload = await response.json();
        console.log('RES OK FROM UPADTTE & PAYOLAODR', payload)
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

// --- STATE --- //
const normalize = (arr) => {
    let newObj = {};
    arr.forEach((ele) => {
        let count = 1
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
            console.log('LOAAD ORDER ACTION', action)

            const normalizedOrderProductsLoad = normalize(action.payload.orderProducts)

            const newState = {
                ...state, order: { ...action.payload.order, orderProducts: normalizedOrderProductsLoad }
            };
            return newState;

        case CREATE_ORDER:
            console.log('create order ACTION', action)

            const normalizedOrderProductsCreate = normalize(action.payload.orderProducts)

            const createState = {
                ...state, order: { ...action.payload.order, orderProducts: normalizedOrderProductsCreate }
            };
            return createState;

        case UPDATE_ORDER: {

            const normalizedOrderProductsUpdate = normalize(action.payload.orderProducts)

            console.log('normalized updated orderrr', normalizedOrderProductsUpdate)
            const updateState = {
                ...state, order: { ...action.payload.order, order_products: normalizedOrderProductsUpdate }
            };
            console.log('updated state objecttt', updateState)
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
