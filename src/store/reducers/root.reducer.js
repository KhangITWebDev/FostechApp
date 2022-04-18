import { combineReducers } from "redux";
import { newsReducer } from "./news.reducer";
import { blogReducer } from "./blog.reducer";
import { serviceReducer } from "./service.reducer";

export const rootReducer = combineReducers({
  news: newsReducer,
  blog: blogReducer,
  service: serviceReducer,
});
