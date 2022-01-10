import { getCategoryStart, getCategorySuccess, getCategoryFail, getCategoryReset, getBooksStart, getBooksSuccess, getBooksFail, getBooksReset } from "../actionTypes";

const initialState = {
  dataGetCategory: [],
  isLoadingGetCategory: false,
  isSuccessGetCategory: false,
  isFailGetCategory: false,

  dataGetBooks: [],
  isLoadingGetBooks: false,
  isSuccessGetBooks: false,
  isFailGetBooks: false,
};

const getCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case getCategoryStart:
      return {
        ...state,
        isLoadingGetCategory: true,
        isSuccessGetCategory: false,
        isFailGetCategory: false,
      };
    case getCategorySuccess:
      return {
        ...state,
        isLoadingGetCategory: false,
        isSuccessGetCategory: true,
        isFailGetCategory: false,
        dataGetCategory: action.payload,
      };
    case getCategoryFail:
      return {
        ...state,
        isLoadingGetCategory: false,
        isSuccessGetCategory: false,
        isFailGetCategory: true,
      };
    case getCategoryReset:
      return {
        ...state,
        isLoadingGetCategory: false,
        isSuccessGetCategory: true,
        isFailGetCategory: false,
      };
    case getBooksStart:
      return {
        ...state,
        isLoadingGetBooks: true,
        isSuccessGetBooks: false,
        isFailGetBooks: false,
      };
    case getBooksSuccess:
      return {
        ...state,
        isLoadingGetBooks: false,
        isSuccessGetBooks: true,
        isFailGetBooks: false,
        dataGetBooks: action.payload,
      };
    case getBooksFail:
      return {
        ...state,
        isLoadingGetBooks: false,
        isSuccessGetBooks: false,
        isFailGetBooks: true,
      };
    case getBooksReset:
      return {
        ...state,
        isLoadingGetBooks: false,
        isSuccessGetBooks: true,
        isFailGetBooks: false,
      };

    default:
      return state;
  }
};

export default getCategoryReducer;
