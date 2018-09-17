import React, { Component } from "react";
import { connect } from "react-redux";
import { getVisibleColors, getSimilarColors } from "../selectors/colors";
import { setSelectedColor } from "../actions/colors";
import ColorGrid from "./ColorGrid";
import ColorDetail from "./ColorDetail";

class Main extends Component {
  handleColorChange = (color = "") => {
    this.props.dispatch(setSelectedColor(color));
  };
  render() {
    const { selectedColor, similarColors } = this.props;
    let content;
    if (selectedColor !== "") {
      content = (
        <ColorDetail
          color={selectedColor}
          similarColors={similarColors}
          onColorChange={this.handleColorChange}
        />
      );
    } else {
      content = <ColorGrid />;
    }
    return (
      <main className="content">
        {content}
        <style jsx>{`
          .content {
            grid-area: content;
            margin-left: 20px;
            margin-right: 20px;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
          }
          @media screen and (min-width: 768px) {
            .content {
              margin-top: 50px;
              margin-left: 10vw;
              margin-right: 10vw;
            }
          }
          @media screen and (min-width: 1024px) {
            .content {
              margin-top: 60px;
            }
          }
          @media screen and (min-width: 1800) {
            .content {
              margin-left: 20vw;
              margin-right: 20vw;
            }
          }
        `}</style>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const visibleColors = getVisibleColors(state);
  // const { allColors, selectedColor, selectedMainColor } = colors;
  // console.log(...Object.values(allColors));
  let similarColors = [];
  if (state.selectedColor !== "") {
    similarColors = getSimilarColors(state);
  }
  return {
    visibleColors,
    selectedMainColor: state.colors.selectedMainColor,
    selectedColor: state.colors.selectedColor,
    similarColors
  };
};

export default connect(mapStateToProps)(Main);
