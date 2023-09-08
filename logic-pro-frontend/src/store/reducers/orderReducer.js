// src/store/reducers/orderReducer.js

import { FETCH_ORDERS, CREATE_ORDER, VIEW_ORDER_DETAILS } from '../actions/types';

const initialState = {
    orders: [],
    selectedOrder: null,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return {
                ...state,
                orders: action.payload,
            };
        case CREATE_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload],
            };
        case VIEW_ORDER_DETAILS:
            return {
                ...state,
                selectedOrder: action.payload,
            };
        default:
            return state;
    }
};

export default orderReducer;
