import callApi from "../../utils/callApi";
import { GET_NEWS_LIST } from "../constants/news.constant";

export const getNewsListAction = () => {
  return async (dispatch) => {
    try {
      const res = await callApi(`api/60939744ac969b4078488026/news?access_token=e8ba858476afc6a0f6c1d3d686e275a8`, "GET")
      dispatch({
        type: GET_NEWS_LIST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
