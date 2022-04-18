import callApi from "../../utils/callApi";
import { GET_SERVICE_LIST } from "../constants/service.constant";

export const getServiceListAction = () => {
  return async (dispatch) => {
    try {
      const res = await callApi(`api/60939744ac969b4078488026/service?access_token=e8ba858476afc6a0f6c1d3d686e275a8`, "GET")
      dispatch({
        type: GET_SERVICE_LIST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
