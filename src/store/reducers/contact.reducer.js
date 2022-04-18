import { POST_NEED } from "../constants/contact.constant";


const initialState = {
    postNeed: [],
};

export const contactReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case POST_NEED: {
            state.postNeed = payload
            return { ...state };
        }
        default:
            return state;
    }
    return state;
};
