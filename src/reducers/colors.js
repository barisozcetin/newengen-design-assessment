import {
  GET_COLORS,
  GET_COLOR_LIST,
  GET_MAIN_COLORS,
  SET_MAIN_COLOR,
  SET_SELECTED_COLOR,
  SELECT_RANDOM_COLOR,
  SET_SEARCH_TEXT
} from "../actions/colors";

import { getRandomNumber } from "../utils/helpers";

const initialState = {
  selectedMainColor: "",
  selectedColor: "",
  allColors: {},
  mainColors: [],
  colorList: [],
  byMainColor: {},
  searchText: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLORS:
      return { ...state, allColors: action.colors, byMainColor: action.colors };
    case GET_COLOR_LIST:
      return { ...state, colorList: action.colorList };
    case GET_MAIN_COLORS:
      return { ...state, mainColors: action.mainColors };
    case SET_MAIN_COLOR:
      return { ...state, selectedColor: "", selectedMainColor: action.color };
    case SET_SELECTED_COLOR:
      return { ...state, selectedColor: action.color };
    case SELECT_RANDOM_COLOR:
      const randomNumber = getRandomNumber(0, state.colorList.length - 1);
      return { ...state, selectedColor: state.colorList[randomNumber] };
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.text };
    default:
      return { ...state };
  }
};
