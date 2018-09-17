import { _getColors } from "./data";

export function getInitialData() {
  return Promise.all([_getColors()]).then(([colors]) => {
    return { colors };
  });
}
