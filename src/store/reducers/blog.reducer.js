import { GET_BLOG_LIST } from "../constants/blog.constant";


const initialState = {
    blogList: [],
};

export const blogReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_BLOG_LIST: {
            state.blogList = payload
            return { ...state };
        }
        default:
            return state;
    }
    return state;
};
