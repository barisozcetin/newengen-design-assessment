import { _getMainColors, _getColors } from "./data";

export function getInitialData() {
  return Promise.all([_getColors(), _getMainColors()]).then(
    ([colors, mainColors]) => {
      return { colors, mainColors };
    }
  );
}
