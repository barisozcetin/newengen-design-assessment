export const getVisibleColors = ({ colors }) => {
  const { byMainColor, colorList, selectedMainColor } = colors;
  if (selectedMainColor !== "") {
    // console.log(selectedMainColor);
    return byMainColor[selectedMainColor];
  } else {
    return colorList;
  }
};

export const getSimilarColors = ({ colors }) => {
  const { colorList, selectedColor } = colors;
  const index = colorList.indexOf(selectedColor);
  if (selectedColor !== "") {
    // console.log(selectedMainColor);
    return [
      colorList[index - 2],
      colorList[index - 1],
      colorList[index],
      colorList[index + 1],
      colorList[index + 2]
    ];
  } else {
    return colorList;
  }
};
