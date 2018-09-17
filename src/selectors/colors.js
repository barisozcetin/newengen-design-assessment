import { getRandomNumber } from "../utils/helpers";

export const getVisibleColors = ({ colors }) => {
  const { byMainColor, colorList, selectedMainColor, searchText } = colors;
  if (selectedMainColor !== "") {
    // console.log(selectedMainColor);
    if (searchText !== "") {
      return byMainColor[selectedMainColor].filter(val =>
        val.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return byMainColor[selectedMainColor];
  } else {
    if (searchText !== "") {
      return colorList.filter(val =>
        val.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return colorList;
  }
};

export const getSimilarColors = ({ colors }) => {
  const { colorList, selectedColor } = colors;
  const index = colorList.indexOf(selectedColor);
  if (selectedColor !== "") {
    // If selected is at the beginning of the array, previous items will be empty
    // Likewise, If selected is at the end of array, next ones will be empty
    // If they are empty, it will add a random element from the list
    return [
      colorList[index - 2] ||
        colorList[getRandomNumber(0, colorList.length - 1)],
      colorList[index - 1] ||
        colorList[getRandomNumber(0, colorList.length - 1)],
      colorList[index],
      colorList[index + 1] ||
        colorList[getRandomNumber(0, colorList.length - 1)],
      colorList[index + 2] ||
        colorList[getRandomNumber(0, colorList.length - 1)]
    ];
  } else {
    return [];
  }
};
