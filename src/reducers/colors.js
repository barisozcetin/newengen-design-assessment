import { GET_COLORS } from "../actions/colors";

const initialState = {
  selectedMainColor: "",
  selectedColor: "",
  allColors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLORS:
      return { ...state, allColors: action.colors };
    default:
      return { ...state };
  }
};
