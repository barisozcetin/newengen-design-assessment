import { getColors, getColorList, getMainColors } from "./colors";

import { getInitialData } from "./../utils/api";
import { hideLoading } from "./loading";

export const handleInitialData = () => dispatch => {
  return getInitialData().then(({ colors }) => {
    dispatch(getColors(colors));
    dispatch(getColorList(colors));
    dispatch(getMainColors(colors));
    dispatch(hideLoading());
  });
};
