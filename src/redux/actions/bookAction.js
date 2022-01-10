import { getCategoryStart, getCategorySuccess, getCategoryFail, getCategoryReset, getBooksStart, getBooksSuccess, getBooksFail, getBooksReset } from "../actionTypes";
import axios from "axios";

export const getCategoryAction = (data, history) => {
  const url = `/fee-assessment-categories`;
  //   console.log("getCategoryAction: ", url);
  return async (dispatch, getState) => {
    dispatch({ type: getCategoryStart });
    try {
      const result = await axios.get(url, undefined, {
        withCredentials: true,
      });
      dispatch({ type: getCategorySuccess, payload: result?.data });
      console.log(result?.data);
    } catch (err) {
      dispatch({ type: getCategoryFail, payload: err });
    }
  };
};

export const getCategoryResetAction = () => {
  return (dispatch, getState) => {
    dispatch({ type: getCategoryReset });
  };
};

export const getBooksAction = (data, history) => {
  const url = `/fee-assessment-books?categoryId=${data.id}&page=${data.page}&size=${data.limit}`;
  // console.log("getBooksAction: ", url);
  return async (dispatch, getState) => {
    dispatch({ type: getBooksStart });
    try {
      const result = await axios.get(url, {
        withCredentials: true,
      });
      dispatch({ type: getBooksSuccess, payload: result?.data });
      console.log(result?.data);
    } catch (err) {
      dispatch({ type: getBooksFail, payload: err });
    }
  };
};

export const getBooksResetAction = () => {
  return (dispatch, getState) => {
    dispatch({ type: getBooksReset });
  };
};
