import { getColors } from "./colors";

import { getInitialData } from "./../utils/api";
import { hideLoading } from "./loading";

export const handleInitialData = () => dispatch => {
  return getInitialData().then(({ colors, mainColors }) => {
    dispatch(getColors(colors));
    dispatch(hideLoading());
  });
};
