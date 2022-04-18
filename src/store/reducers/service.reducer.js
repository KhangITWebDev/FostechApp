import { GET_SERVICE_LIST } from "../constants/service.constant";


const initialState = {
    serviceList: [],
};

export const serviceReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_SERVICE_LIST: {
            state.serviceList = payload
            return { ...state };
        }
        default:
            return state;
    }
    return state;
};
