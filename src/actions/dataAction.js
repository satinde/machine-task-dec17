import axios from "axios";
import {
  GET_DATA_FAIL,
  GET_DATA_SUCCESS,
  GET_DATA_REQUEST,
} from "../constants/data";

export const dataAction = () => async(dispatch) => {
  try {
    dispatch({
      type: GET_DATA_REQUEST,
    });
    const {data} = await axios.get(`https://reqres.in/api/users`)
    dispatch({
        type:GET_DATA_SUCCESS,
        payload:data
    })

  } catch (error) {
      dispatch({
          type:GET_DATA_FAIL,
          payload:error?.response?.data?.message
      })
  }
};
