import { GET_BREED, GET_DOGS, GET_TEMPERAMENTS } from "../constants/contants";
import { ReducerState } from "../utils/interfaces";

const initialState = {
  dogs: [],
  temperaments: [],
  breed: [],
};

export function rootReducer(state: ReducerState = initialState, action: any) {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    case GET_BREED:
      return { ...state, breed: action.payload };
    default:
      return state;
  }
}
