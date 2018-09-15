import {
  GET_COLORS,
  GET_COLOR_LIST,
  GET_MAIN_COLORS,
  SET_MAIN_COLOR,
  SET_SELECTED_COLOR
} from "../actions/colors";

const initialState = {
  selectedMainColor: "",
  selectedColor: "",
  allColors: {},
  mainColors: [],
  colorList: [],
  byMainColor: {}
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
    default:
      return { ...state };
  }
};
