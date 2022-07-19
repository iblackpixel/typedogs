import axios from "axios";
import {
  GET_BREED,
  GET_DOGS,
  GET_DOGS_ERROR,
  GET_TEMPERAMENTS,
  GET_TEMPERAMENTS_ERROR,
} from "../constants/contants";

const puertoBack = "https://hidden-fortress-17520.herokuapp.com/";

export const getDogs = () => async (dispatch: (x: any) => void) => {
  try {
    const json = await axios.get(`${puertoBack}dogs`);

    dispatch({
      type: GET_DOGS,
      payload: json.data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_DOGS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBreed =
  (id: string | number) => async (dispatch: (x: any) => void) => {
    try {
      const json = await axios.get(
        "https://hidden-fortress-17520.herokuapp.com/dogs/" + id
      );
      dispatch({
        type: GET_BREED,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getTemperaments = () => async (dispatch: (x: any) => void) => {
  try {
    const json = await axios.get(`${puertoBack}temperament`);

    dispatch({
      type: GET_TEMPERAMENTS,
      payload: json.data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_TEMPERAMENTS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
