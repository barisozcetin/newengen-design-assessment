export const GET_COLORS = "GET_COLORS";
export const GET_COLOR_LIST = "GET_COLOR_LIST";
export const GET_MAIN_COLORS = "GET_MAIN_COLORS";
export const SET_MAIN_COLOR = "SET_MAIN_COLOR";
export const SET_SELECTED_COLOR = "SET_SELECTED_COLOR";
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const SELECT_RANDOM_COLOR = "SELECT_RANDOM_COLOR";

export const getColors = colors => {
  return {
    type: GET_COLORS,
    colors
  };
};

export const getColorList = colors => {
  const colorList = [];
  Object.values(colors).forEach(list => colorList.push(...list));
  return {
    type: GET_COLOR_LIST,
    colorList
  };
};

export const getMainColors = colors => {
  const mainColors = Object.keys(colors);
  return {
    type: GET_MAIN_COLORS,
    mainColors
  };
};

export const setMainColor = (color = "") => {
  return {
    type: SET_MAIN_COLOR,
    color
  };
};

export const setSelectedColor = (color = "") => {
  return {
    type: SET_SELECTED_COLOR,
    color
  };
};

export const setSearchText = (text = "") => {
  return {
    type: SET_SEARCH_TEXT,
    text
  };
};

export const selectRandomColor = () => ({
  type: SELECT_RANDOM_COLOR
});
