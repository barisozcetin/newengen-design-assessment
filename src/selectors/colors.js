export const getVisibleColors = ({ colors }) => {
  const { byMainColor, colorList, selectedMainColor } = colors;
  if (selectedMainColor !== "") {
    // console.log(selectedMainColor);
    return byMainColor[selectedMainColor];
  } else {
    return colorList;
  }
};
