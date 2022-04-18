import callApi from "../../utils/callApi";
import { POST_NEED } from "../constants/contact.constant";

export const postContactAction = (need) => {
  console.log(need);
  return async (dispatch) => {
    try {
      const res = await callApi(`api/60939744ac969b4078488026/contact?access_token=e8ba858476afc6a0f6c1d3d686e275a8`, "POST", need)
      dispatch({
        type: POST_NEED,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
