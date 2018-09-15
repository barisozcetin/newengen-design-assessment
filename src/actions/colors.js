export const GET_COLORS = "GET_COLORS";

export const getColors = colors => {
  return {
    type: GET_COLORS,
    colors
  };
};
