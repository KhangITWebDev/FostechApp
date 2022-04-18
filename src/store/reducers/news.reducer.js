import { GET_NEWS_LIST } from "../constants/news.constant";


const initialState = {
    newsList: [],
};

export const newsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_NEWS_LIST: {
            state.newsList = payload
            return { ...state };
        }
        default:
            return state;
    }
    return state;
};
